import { MongoClient } from 'mongodb';

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
const MONGODB_PASSWD = process.env.MONGODB_PASSWD;
const MONGODB_NAME = process.env.MONGODB_DB_NAME;

const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWD}@${MONGODB_URL}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(MONGODB_NAME).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbName);

export default database;
