const knex = require("knex");

const knexConfig = require("../knexfile.js");
// const dbEnv = process.env.DB_ENV || "development";

console.log("this is the dbEnv", dbEnv);
module.exports = knex(knexConfig.development);
