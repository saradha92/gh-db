import { MongoClient } from 'mongodb';

const clusterAddress = process.env.MONGODB_URL;
const dbuser = process.env.MONGODB_USERNAME;
const dbpassword = process.env.MONGODB_PASSWD;
const dbname = process.env.MONGODB_NAME;
const MONGODB_PORT = process.env.MONGODB_PORT;

const uri = `mongodb+srv://${dbuser}:${dbpassword}@${clusterAddress}/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

console.log('Trying to connect to db');

try {
  await client.connect();
  await client.db(dbname).command({ ping: 1 });
  console.log('Connected successfully to server');
} catch (error) {
  console.log('Connection failed.');
  await client.close();
  console.log('Connection closed.');
}

const database = client.db(dbname);

export default database;
