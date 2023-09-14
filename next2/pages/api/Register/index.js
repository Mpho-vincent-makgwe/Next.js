
import {connectDataBase, insertDocument} from '@/helpers/db-utile'


const handler =async (req, res)=>{
    if(req.method === 'POST'){
    const userEmail = req.body.email;

if(!userEmail || !userEmail.includes('@')){
    res.status(422).json({message: 'Invalid email address.'})
    return;
};

let client;
try{ client = await connectDataBase();}catch(err){
    res.status(500).json({message: 'inserting Data Failed'});
    return;
}
try{ await insertDocument(client, 'emails',{ email: userEmail }) 
    client.close();}catch(err){
        res.status(500).json({message: 'Failed to insert document'});
        return;
    }
    res.status(201).json({message: "Signed Up!"})
    }
}
export default handler