const { MongoClient } = require('mongodb');
const url = process.env.ATLAS_URI;
const dbName = 'jewelryShop';

let db;

const connectToDb = async () => {
  if (db) return db;
  const client = await MongoClient.connect(url);
  db = client.db(dbName);
  console.log('Connected to Database');
  return db;
};

const getDb = () => {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
};

module.exports = { connectToDb, getDb };