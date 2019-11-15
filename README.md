# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is the purpose of using _sessions_?
      Sessions are important for the end user because it would be horrible to constantly login or get authentication every single time a user does anything.

- [x] What does bcrypt do to help us store passwords in a secure manner.
      BCrypt hashes and salts the passwords so that we aren't actually storing passwords themselves in plain text, but rather a one-way output of the password.

- [x] What does bcrypt do to slow down attackers?
      BCrypt also adds 'time' to obtaining a users passwords if they are using a brute force attack through a `key derivation function`, whatever that means.

- [x] What are the three parts of the JSON Web Token?
      Header - contains the algorithm with the token type
      Payload - has permissions for the user - userID - date the token was issued - any information we want to store - Signature - Has all the information signed with a secret

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [x] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [x] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
