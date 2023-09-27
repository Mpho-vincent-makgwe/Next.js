import { EncrypPassword, verifyPassword } from "@/lib/auth";
import { DbConnection } from "@/lib/db";
import { getSession } from "next-auth/react";

const handler = async (request, response)=>{
if(request.method !== 'PATCH' ){
    return;
};
const session = await getSession({req: request});
if(!session){
    response.status(401).json({message: 'Not authenticated boy'})
    return
}
const userEmail = session.user.userEmail;
const oldPassword = request.body.oldPassword;
const newPassword = request.body.newPassword;

const client = await DbConnection();
const usersCollection = client.db().collection('singedUpUsers')
const user = await usersCollection.findOne({User_Email: userEmail});
if(!user){
    response.status(404).json({message: 'User not found'});
    client.clode();
    return;
}
const currentPassword = user.User_Password
const comparedPasswords = verifyPassword(oldPassword, currentPassword);
if(!comparedPasswords){
    client.clode();
    response.status(422).json({message: 'Passwords do not match'})
    return;
}
const hashedPassword = await EncrypPassword(newPassword)
const result = await usersCollection.updateOne({User_Email: userEmail}, {$set: {User_Password: hashedPassword}});
console.log(result);
client.close();
response.status(201).json({message: 'Password updated successfully'})
};
export default handler;