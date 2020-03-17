const mongoService = require("./mongo-service");
const userService = require("./user-service");
const CARDS_DB = "cards";
const ObjectId = require("mongodb").ObjectId;

function query() {
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.find({}).toArray();
  });
}

function getCardsByUser(userId) {
  userIduserId = new ObjectId(userId);
  return mongoService.connect().then(db =>
    db
      .collection(CARDS_DB)
      .find({
        nextAppearance: { $lt: Date.now() }
      })
      .toArray()
  );
}

function remove(cardId) {
  console.log("remove", cardId);
  cardId = new ObjectId(cardId);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    // return collection.deleteOne({ _id: cardId });
    return collection.updateOne({ _id: cardId }, { $set: { isDeleted: true } });
  });
}

function getCardById(cardId) {
  console.log("getCardById cardId:", cardId);
  cardId = new ObjectId(cardId);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.findOne({ _id: cardId });
  });
}

function addCard(card) {
  console.log("addCard", card);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.insertOne(card).then(result => {
      card._id = result.insertedId;
      userService.addCardID(card, card._id);
      return card;
    });
  });
}

function updateCard(card) {
  console.log("updateCard", card);
  const cardId = card._id;
  card._id = new ObjectId(card._id);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.updateOne({ _id: card._id }, { $set: card }).then(() => {
      return cardId;
    });
  });
}

module.exports = {
  query,
  getCardsByUser,
  remove,
  getCardById,
  addCard,
  updateCard
};
