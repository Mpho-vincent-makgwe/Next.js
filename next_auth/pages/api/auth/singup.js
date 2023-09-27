import { DbConnection } from "@/lib/db"
import { EncrypPassword } from "@/lib/auth";


const Singup = async (request, response) => {
if( request.method !== 'POST'){return};
    const data = request.body;

    const { userEmail, userPassword } = data;
    if(!userEmail ||
        !userEmail.includes('@') ||
        !userPassword || 
        userPassword.trim().length < 7){
                response.status(422).json({message: 'Invalid username or password'})
return;
    };

    const newPas  = await EncrypPassword(userPassword);

    const userDetails = {
        User_Email: userEmail,
        User_Password: newPas,
    };
    
    const client = await DbConnection();
    const dataBase = client.db();
    const existingUsers = await dataBase.collection('singedUpUsers').findOne({User_Email: userEmail});
    if(existingUsers){
        response.status(422).json({message: 'User already exists!'});
        client.close();
        return
    }
    const results = await dataBase.collection('singedUpUsers').insertOne(userDetails);
    response.status(201).json({message: `Successfully created user`});
    client.close();
};

export default Singup;