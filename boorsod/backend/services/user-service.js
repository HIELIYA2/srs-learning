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

function getUserById(userId) {
  userId = new ObjectId(userId);
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.findOne({ _id: userId });
  });
}
function searchUser(userId) {
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    console.log("uid", userId);
    return collection.findOne({ uid: userId });
  });
}

function addUser(user) {
  console.log("add user", user);
  return mongoService.connect().then(db => {
    const collection = db.collection(USERS_DB);
    return collection.insertOne(user).then(result => {
      user._id = result.insertedId;
      return user;
    });
  });
}

function updateUser(user) {
  console.log("update user", user);
  const userId = user._id;
  user._id = new ObjectId(user._id);
  return mongoService.connect().then(db => {
    const collection = db.collection(USER_DB);
    return collection.updateOne({ _id: user._id }, { $set: user }).then(() => {
      return getUserById(userId);
    });
  });
}

module.exports = {
  query,
  remove,
  getUserById,
  addUser,
  updateUser
};
