const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const connection = new MongoClient(url);
const dbName = 'Wealth_Portfolio';

async function dbConnect(coll) {
    // Use connect method to connect to the server
    let result =  await connection.connect();
    console.log('Connected successfully to server');
    let db = result.db(dbName);
    return  db.collection(coll);
    
  }

 
module.exports= dbConnect;  
