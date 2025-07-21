require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

const uri = process.env.MONGODB_URI;
let cachedDb = null;
let cachedDbLocal = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = await MongoClient.connect(uri);
    const db = client.db('service');
    cachedDb = db;
    return db;
}

async function collection(collName) {
    const db = await connectToDatabase();
    return db.collection(collName)
}
module.exports = {collection}

const test = async() => {
    try{
        const coll = await collection("user")
        const userTest = await coll.findOne({name:'hhand'})
        console.log(userTest)
    }
    catch(e){
        console.log(e)
    }
}
test()