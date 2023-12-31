import { useRef } from 'react';
import classes from './profile-form.module.css';

const ProfileForm=({ changePassword })=> {

const oldPasswordRef = useRef();
const newPasswordRef = useRef();


  const submitHandler =async(event)=>{
  event.preventDefault();
  const enteredOldPassword = oldPasswordRef.current.value;
  const enteredNewPassword = newPasswordRef.current.value;
changePassword({
  oldPassword: enteredOldPassword,
  newPassword: enteredNewPassword,
})
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordRef} type='password' id='new-password' />
      </div>
      <div className={classes.control}>
        <label htmlFor='old-password'>Old Password</label>
        <input ref={oldPasswordRef} type='password' id='old-password' />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
