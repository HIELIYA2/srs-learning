const userService = require("../services/user-service");
const USER_URL = "/api/users";
function addUserRoutes(app) {
  // users REST API:

  // LIST
  app.get(USER_URL, (req, res) => {
    userService.query().then(users => res.json(users));
  });

  // LIST BY ID
  app.get(`${USER_URL}/cards/:userId`, (req, res) => {
    const userId = req.params.userId;
    console.log("LIST BY ID userId ", userId);
    userService.getCardsByID(userId).then(cards => res.json(cards));
  });

  // LIST BY DATE
  app.get(`${USER_URL}/learn/:userId`, (req, res) => {
    const userId = req.params.userId;
    console.log("LIST BY DATE userId ", userId);
    userService.getCardsByDate(userId).then(cards => res.json(cards));
  });

  // SINGLE - GET Full detail
  app.get(`${USER_URL}/:userId`, (req, res) => {
    const userId = req.params.userId;
    console.log("userId", userId);
    userService.getCardsByID(userId).then(user => res.json(user));
  });

  // DELETE
  app.delete(`${USER_URL}/:userId`, (req, res) => {
    const userId = req.params.userId;
    console.log("userId", userId);
    userService.remove(userId).then(() => res.end(`user ${userId} Deleted `));
  });

  // LOGIN
  app.post(USER_URL, (req, res) => {
    const user = req.body;
    userService.login(user).then(user => res.json(user));
  });

  // UPDATE
  app.put(`${USER_URL}/:userId`, (req, res) => {
    const user = req.body;
    console.log("put req", user);
    userService.updateUser(user).then(user => res.json(user));
  });
}

module.exports = addUserRoutes;
