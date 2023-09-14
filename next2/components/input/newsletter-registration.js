import{ useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '@/store/notification-context';

const NewsletterRegistration = () => {
  const notCtx = useContext(NotificationContext);
  const emailRef = useRef();

  const registrationHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;

    notCtx.showNotiofication({
      title: 'Signing Up!',
      message: 'Registering for newsletter',
      status: 'pending'
    });

    try {
      const response = await fetch('/api/Register', {
        method: 'POST',
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        notCtx.showNotiofication({
          title: 'Signed Up!',
          message: 'Successfully Registered!',
          status: 'success'
        });
      } else {
        throw new Error('Could not register');
      }
    } catch (error) {
      notCtx.showNotiofication({
        title: 'Error!',
        message: error.message || 'Something went wrong!',
        status: 'error'
      });
    }
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
};
export default NewsletterRegistration;
