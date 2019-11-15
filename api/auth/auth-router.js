const router = require("express").Router();

router.post("/register", (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 12, (err, hash) => {
    users
      .add({ username, password: hash })
      .then(added => res.status(200).json(added))
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Internal error adding new user" });
      });
  });
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
