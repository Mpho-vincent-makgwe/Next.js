import Head from 'next/head'
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import { useRef, useState } from 'react' 

export default function Home() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitFormHandler =async(event)=>{
  event.preventDefault();
  const enteredEmail = emailRef.current.value;
  const enteredFeedback = feedbackRef.current.value;
  const reqBody = {email: enteredEmail, text: enteredFeedback };
  const response =await fetch('./api/feedback',{
    method: 'POST',
    body:JSON.stringify(reqBody),
    headers:{
      'Content-Type': 'application/json'
    }
  })//{email:'test@gmail.com', text: 'Some Feedback'}
  const data = await response.json();
}

const loadFeedBackHandler =async()=>{
  const response = await fetch('./api/feedback')
  const data = await response.json();
  setFeedbackItems(data.feedback);
}
  return (
    <>
    <Head>
      </Head>
      <main className={`${styles.main}`}>
      <form onSubmit={submitFormHandler}>
      <Image width={100} height={100} src='/senku.jpeg'/>
      <div> 
        <label htmlFor='email'>your Email Adress</label>
      <input type='email' id='email' ref={emailRef}/>
      </div>
      <div> 
        <label htmlFor='feedback'>your Feedback</label>
      <textarea rows={5} id='feedback' ref={feedbackRef}></textarea>
      </div>
      <button>send feedback</button>
      </form>
      <br/>
      <hr/>
      <button onClick={loadFeedBackHandler}>load feedback</button>
      <ul>
        {feedbackItems.map(item=><li key={item.id}>{item.text}</li>)}
      </ul>
      </main>
    </>
  )
}
