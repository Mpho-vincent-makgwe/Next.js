
import { connectDataBase, insertDocument, getAllComments } from "@/helpers/db-utile";
const handler = async (req,res) => {
    const eventID = req.query.commentid
    let client;

try{
     client = await connectDataBase();
}catch(err){
    res.status(500).json({message: 'Connecting to DataBase Failed!'});
    return;
};
if(req.method === 'POST'){
//add serverside validation
const { email,name, text } = req.body

if(
    !email.includes('@')||
    !name||
    name.trim()===''||
    !text||
    text.trim()===''){
        res.status(422).json({message: 'Invalid Input'})
        return;
};
const newComment = {
    email,
    name,
    text,
    eventID,
};

try {
    const result = await insertDocument(client, 'comments', newComment);
    newComment._id = result.insertedId;
    res.status(201).json({message: 'Success uploading comment.',comments: newComment});
} catch (error) {
    res.status(501).json({message: 'Error inserting comment'});
    return;}
};

if(req.method === 'GET'){
    try {
        const allComments = await getAllComments(client, 'comments', {_id: -1});
        res.status(200).json({comments: allComments});
    } catch (error) {
        res.status(500).json({message: 'Error getting comments'});
    }
    
};
client.close();
}

export default handler;
