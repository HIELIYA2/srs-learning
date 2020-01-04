const userService = require("../services/user-service");
const USER_URL = "/api/user";
function addUserRoutes(app) {
  // users REST API:

  // LIST
  app.get(USER_URL, (req, res) => {
    userService.query().then(users => res.json(users));
  });

  // SINGLE - GET Full detail
  app.get(`${USER_URL}/:userId`, (req, res) => {
    const userId = req.params.userId;
    console.log("cardId", userId);
    userService.getUserById(userId).then(user => res.json(user));
  });

  // DELETE
  app.delete(`${USER_URL}/:userId`, (req, res) => {
    const userId = req.params.userId;
    console.log("userId", userId);
    userService.remove(userId).then(() => res.end(`user ${userId} Deleted `));
  });

  // CREATE
  app.post(USER_URL, (req, res) => {
    const user = req.body;
    userService.addUser(user).then(user => res.json(user));
  });

  // UPDATE
  app.put(`${USER_URL}/:userId`, (req, res) => {
    const user = req.body;
    console.log("put req", user);
    userService.updateUser(user).then(user => res.json(user));
  });
}

module.exports = addUserRoutes;
