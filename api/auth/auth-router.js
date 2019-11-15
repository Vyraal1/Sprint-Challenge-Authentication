const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const users = require("../users/users-model");

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 12, (err, hash) => {
    users
      .add({ username, password: hash })
      .then(added => res.status(201).json(added))
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Internal error adding new user" });
      });
  });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  //search by username, since client doesn't know what their ID is
  users
    .findByUser({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwtToken(user.username);
        res.status(200).json({
          message: "You're in the mainframe.",
          token
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Internal error when logging user in." });
    });
});

function getJwtToken(username) {
  const payload = {
    username
  };

  const secret = process.env.JWT_SECRET || "There Is No Cow Level";

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
