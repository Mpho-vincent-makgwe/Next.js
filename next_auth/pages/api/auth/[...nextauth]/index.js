import { verifyPassword } from "@/lib/auth";
import { DbConnection } from "@/lib/db";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials){
                const client = await DbConnection();
                const usersCollection = client.db().collection('singedUpUsers');
                const user = await usersCollection.findOne({ User_Email: credentials.userEmail});
                if(!user){
                    client.close();
                    throw new Error('No user found!');
                }
                const isValid = verifyPassword(credentials.userPassword, user.User_Password);
                if(!isValid){
                    client.close();
                    throw new Error('Invalid password!');
                }
                client.close();
                return {
                    userEmail: user.User_Email,
                };
                
            }})
    ]
});