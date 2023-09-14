import { useState, useEffect } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

const Comments = (props)=> {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [commentsData, setCommentsData] = useState([]);

const fetchData = async () =>{
  const response = await fetch(`/api/Comments/${eventId}`);
  const data = await response.json();
  console.log(data.comments);
  setCommentsData(data.comments);
}
useEffect(()=>{
  if(showComments){
    fetchData();
  }
},[showComments])

  const toggleCommentsHandler=()=> {
    setShowComments((prevStatus) => !prevStatus);
    
  }

  const addCommentHandler=async(commentData)=> {
    // send data to API
    const response = await fetch(`/api/Comments/${eventId}`,{
      method: 'POST',
      body: JSON.stringify(commentData),
      headers:{
        'content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={commentsData}/>}
    </section>
  );
}

export default Comments;
