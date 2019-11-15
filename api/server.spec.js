/*
- when making a GET request to the `/` endpoint 
  the API should respond with status code 200 
  and the following JSON object: `{ api: 'running' }`.
*/
const request = require("supertest");
const server = require("./server.js");

// are we even in a testing environment lmao
it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("api", () => {
  describe("registration", () => {
    it("should return 201 CREATED", function() {
      return request(server)
        .post("/api/auth/register")
        .send({
          username: "test12",
          password: "test1"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return the user", function() {
      return request(server)
        .post("/api/auth/register")
        .send({
          username: "test13",
          password: "test1"
        })
        .then(res => {
          console.log(res.body);
          expect(!!res.body.username).toBe(true);
        });
    });
  });

  describe("login", () => {
    it("should return a token", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "test1", password: "test1" })
        .then(res => {
          console.log(res.body.token);
          expect(!!res.body.token).toBe(true);
        });
    });

    it("should let me know i'm in the mainframe", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "test1", password: "test1" })
        .then(res => {
          expect(res.body.message).toBe("You're in the mainframe.");
        });
    });
  });
});
