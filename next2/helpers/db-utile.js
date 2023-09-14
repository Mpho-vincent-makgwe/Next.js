import { MongoClient } from 'mongodb';

const connectDataBase = async()=>{
    const client = await MongoClient.connect('mongodb+srv://mphomakgwe4:CwjXciRRspzKhWQZ@nextjsexploring.fbmkwb0.mongodb.net/nextapp_emails?');
return client;
};
const insertDocument =async(client, collection,document)=>{
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export const getAllComments = async(client, collection,sort)=>{
    const db = client.db();
    const allComments = await db
    .collection(collection)
    .find()
    .sort(sort)
    .toArray();
    return allComments;
}

export { connectDataBase, insertDocument};