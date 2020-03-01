const mongoService = require("./mongo-service");
const USERS_DB = "users";
const ObjectId = require("mongodb").ObjectId;

function query() {
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.find({}).toArray();
  });
}

function remove(userId) {
  console.log("remove", userId);
  userId = new ObjectId(userId);
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.deleteOne({ _id: userId });
  });
}

function searchUser(userId) {
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.findOne({ uid: userId });
  });
}
function getUserById(userId) {
  userId = new ObjectId(userId);
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.findOne({ _id: userId });
  });
}

function getCardById(cardId) {
  cardId = new ObjectId(cardId);
  return mongoService.connect().then(db => {
    const collection = db.collection("cards");
    return collection.findOne({
      _id: cardId
    });
  });
}

function getCardByDate(cardId) {
  cardId = new ObjectId(cardId);
  return mongoService.connect().then(db => {
    const collection = db.collection("cards");
    return collection.findOne({
      _id: cardId,
      nextAppearance: { $lt: Date.now() },
      isDeleted: false
    });
  });
}

function getCardsByID(userId) {
  console.log("getCardsByID activated", userId);
  userId = new ObjectId(userId);
  return mongoService.connect().then(async db => {
    const collection = db.collection(USERS_DB);
    let user = await collection.findOne({
      _id: userId
    });
    console.log("!!!!!!!!!!!!!!!!!", user);
    const promises = user.cardsID.map(
      async id =>
        await getCardById(id).then(res => {
          console.log("res", res);
          return res;
        })
    );
    return Promise.all(promises);
  });
}

function getCardsByDate(userId) {
  console.log("getCardsByDate activated", userId);
  userId = new ObjectId(userId);
  return mongoService.connect().then(async db => {
    const collection = db.collection(USERS_DB);
    let user = await collection.findOne({
      _id: userId
    });
    console.log("!!!!!!!!!!!!!!!!!", user);
    const promises = user.cardsID.map(
      async id =>
        await getCardByDate(id).then(res => {
          console.log("res", res);
          return res;
        })
    );
    return Promise.all(promises);
  });
}

async function login(user) {
  let user_db = await searchUser(user.uid);
  console.log(user_db, "user", user);
  if (!user_db) {
    user_db = await addUser(user);
  }
  console.log("after login user:", user_db);
  return user_db;
}

function addUser(user) {
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.insertOne(user).then(result => {
      user._id = result.insertedId;
      return user;
    });
  });
}

function addCardID(card, cardId) {
  console.log("update addCardID", cardId, card);
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.updateOne(
      { uid: card.uid },
      { $push: { cardsID: cardId } }
    );
  });
}

function updateUser(user) {
  console.log("update user", user);
  const userId = user._id;
  user._id = new ObjectId(user._id);
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.updateOne({ _id: user._id }, { $set: user }).then(() => {
      return getUserById(userId);
    });
  });
}

module.exports = {
  login,
  query,
  remove,
  getUserById,
  getCardsByID,
  getCardsByDate,
  addUser,
  updateUser,
  addCardID
};
