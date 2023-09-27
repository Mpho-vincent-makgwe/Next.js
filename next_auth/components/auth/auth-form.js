import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
const createUser = async(userEmail, userPassword)=>{
  const response = await fetch('/api/auth/singup', {
    method: 'POST',
    body: JSON.stringify({userEmail, userPassword}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  if( !response.ok){
    throw new Error(data.message || 'Something went wrong');
  }
  return data;
};


function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

const userEmailRef = useRef();
const userPasswordRef = useRef();
const redirect = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  };


  const submitHandler = async(event) => {
    event.preventDefault();
    const enteredEmail = userEmailRef.current.value;
    const enteredPass = userPasswordRef.current.value;

    if(isLogin){
  const result = await signIn('credentials', {
     redirect: false,
     userEmail: enteredEmail,
     userPassword: enteredPass,
     } );
     if (!result.error){
      redirect.replace('/profile')
     }
    }else{
      try {
            const result = await createUser(enteredEmail, enteredPass);
            console.log(result);
      } catch (error) {
        console.log(error);
      }

    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={userEmailRef} type='email' id='email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={userPasswordRef} type='password' id='password' required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
