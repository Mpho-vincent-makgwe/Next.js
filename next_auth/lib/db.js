import { MongoClient } from 'mongodb';

const connekt = `mongodb+srv://mphomakgwe4:CwjXciRRspzKhWQZ@nextjsexploring.fbmkwb0.mongodb.net/Next_auth-Singup`;

export const DbConnection = async () => {
    const client = await MongoClient.connect(connekt);
    return client;
};
