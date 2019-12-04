const mongoService = require("./mongo-service");
const CARDS_DB = "cards";
const ObjectId = require("mongodb").ObjectId;

function query() {
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.find({}).toArray();
  });
}

function getCardsByDate() {
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
  console.log("addCard", card);
  return mongoService.connect().then(db => {
    const collection = db.collection(CARDS_DB);
    return collection.insertOne(card).then(result => {
      card._id = result.insertedId;
      return card;
    });
  });
}

function updateCard(card) {
  console.log("updateCard", card);
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
  getCardsByDate,
  remove,
  getCardById,
  addCard,
  updateCard
};

// .update({},
// { nextAppearance: { $lt: Date.now() } },
// { $inc: { cardInOrder: 1 } },
// { $unset: { Review: 1 } },
// { $set: { "cardInOrder": 1 } },
// { multi: true })
