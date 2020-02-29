const cardService = require("../services/card-service");
const CARD_URL = "/api/card";
function addCardRoutes(app) {
  // cards REST API:

  // LIST
  app.get(CARD_URL, (req, res) => {
    cardService.query().then(cards => res.json(cards));
  });

  // LIST BY USER
  app.get(`${CARD_URL}s/userId`, (req, res) => {
    const userId = req.params.userId;
    cardService.getCardsByUser(userId).then(cards => res.json(cards));
  });

  // SINGLE - GET Full detail
  app.get(`${CARD_URL}/:cardId`, (req, res) => {
    const cardId = req.params.cardId;
    cardService.getCardById(cardId).then(card => res.json(card));
  });

  // DELETE
  app.delete(`${CARD_URL}/:cardId`, (req, res) => {
    const cardId = req.params.cardId;
    cardService.remove(cardId).then(() => res.end(`Card ${cardId} Deleted `));
  });

  // CREATE
  app.post(CARD_URL, (req, res) => {
    const card = req.body;
    cardService.addCard(card).then(card => res.json(card));
  });

  // UPDATE
  app.put(`${CARD_URL}/:cardId`, (req, res) => {
    const card = req.body;
    cardService.updateCard(card).then(card => res.json(card));
  });
}

module.exports = addCardRoutes;
