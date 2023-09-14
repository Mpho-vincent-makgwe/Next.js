import classes from './newsletter-registration.module.css';
import { useRef } from 'react' 

const NewsletterRegistration=()=> {
  const emailRef = useRef();

const registrationHandler=async(event)=> {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;


    const response = await fetch('/api/Register',{
      method: 'POST',
      body: JSON.stringify({email: enteredEmail}),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data)
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
          ref={emailRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
