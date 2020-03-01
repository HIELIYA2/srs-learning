var dbConn = null;

function connectToMongo() {
  // Reuse existing connection if exist
  if (dbConn) return Promise.resolve(dbConn);
  const MongoClient = require("mongodb").MongoClient;

  const url = "mongodb://localhost:27017/borsood_db";
  // "mongodb+srv://hillel:maJ24gr#aZyZ@cluster0-o48xr.mongodb.net/test?retryWrites=true&w=majority";
  // const dbName = "borsood_db";

  const client = new MongoClient(url, { useNewUrlParser: true });

  return client.connect().then(client => {
    console.log("Connected to MongoDB");
    // If we get disconnected (e.g. db is down)
    client.on("close", () => {
      console.log("MongoDB Disconnected!");
      dbConn = null;
    });
    dbConn = client.db();
    return dbConn;
  });
}

module.exports = {
  connect: connectToMongo
};
