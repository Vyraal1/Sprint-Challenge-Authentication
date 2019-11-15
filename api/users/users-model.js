const db = require("../../database/dbConfig");

module.exports = {
  add,
  find,
  findByUser
};

function find(id) {
  return id
    ? db("users")
        //only return the username and the password
        .select("username", "password")
        .where({ id })
        .first()
    : //if no id is given, return the entire array of users
      db("users").select("username", "password");
}

function findByUser(filter) {
  //needs to be a filter OBJECT
  return db("users")
    .where(filter)
    .first();
}

function add(user) {
  return db("users")
    .insert(user)
    .then(([id]) => find(id));
}
