const mongoService = require("./mongo-service");
const CARDS_DB = "cards";
const ObjectId = require("mongodb").ObjectId;

function query() {
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.find({}).toArray();
  });
}

function remove(cardId) {
  cardId = new ObjectId(cardId);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.deleteOne({ _id: cardId });
  });
}

function getCardById(cardId) {
  cardId = new ObjectId(cardId);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.findOne({ _id: cardId });
  });
}

function addCard(card) {
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.insertOne(card).then(result => {
      card._id = result.insertedId;
      return card;
    });
  });
}

function updateCard(card) {
  card._id = new ObjectId(card._id);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection
      .updateOne({ _id: card._id }, { $set: card })
      .then(result => {
        return card;
      });
  });
}

module.exports = {
  query,
  remove,
  getCardById,
  addCard,
  updateCard
};