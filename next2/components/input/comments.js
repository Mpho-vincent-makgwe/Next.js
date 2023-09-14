import { useState, useEffect, useContext } from 'react';


import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '@/store/notification-context';


const Comments = (props)=> {
  const { eventId } = props;

  const notCtx = useContext(NotificationContext)

  const [showComments, setShowComments] = useState(false);
  const [commentsData, setCommentsData] = useState([]);
  const [isFetchingC, setIsFectchingC] = useState(false);

const fetchData = async () =>{
  const response = await fetch(`/api/Comments/${eventId}`);
  const data = await response.json();
  console.log(data.comments);
  setCommentsData(data.comments);
}
useEffect(()=>{
  if(showComments){
    setIsFectchingC(true);
    fetchData();
    setIsFectchingC(false);
  }
},[showComments])

  const toggleCommentsHandler=()=> {
    setShowComments((prevStatus) => !prevStatus);
    
  }

  const addCommentHandler=async(commentData)=> {

    notCtx.showNotiofication({
      title: 'Sending comment..',
      message: 'Your comment is currectly stored into a database',
      status: 'pending'
    });

    // send data to API
    try {
      const response = await fetch(`/api/Comments/${eventId}`,{
      method: 'POST',
      body: JSON.stringify(commentData),
      headers:{
        'content-type': 'application/json'
      }
    });
    if (response.ok) {
      notCtx.showNotiofication({
        title: 'Comment sent.',
        message: 'Comment Successfully sent',
        status: 'success'
      });
    } else {
      throw new Error('Could not register');
    }
    } catch (error) {
      notCtx.showNotiofication({
        title: 'Error!',
        message: error.message || `Something went wrong, could not sent't send your comment!`,
        status: 'error'
      });
    }
    
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments&& !isFetchingC && <CommentList items={commentsData}/>}
      {showComments && isFetchingC && (
  <div className={classes.loading}>
    <div className={classes.spinner}/>
  </div>
)}

    </section>
  );
}

export default Comments;
