import { useEffect, useState } from 'react';
import ProfileForm from './profile-form';
import classes from './user-profile.module.css';
import { getSession } from 'next-auth/react';


function UserProfile() {

  // const [ isLoading, setIsLoading] = useState();
  // useEffect(() => {
  //   getSession().then(session=>{
  //     setIsLoading(false)
  //     if(!session){
  //       window.location.href = '/auth';
  //     }
  //   })
  // },[])
  // if(isLoading){
  // return <p>Loading...</p>
  // }
  const changePasswordHandler =async(passwordData)=>{
  const result = await fetch('/api/user/change',{
    method: 'PATCH',
    body: JSON.stringify(passwordData),
    headers:{
      'Content-Type': 'application/json',
    }
  });
  const data = await result.json();
  console.log(data);
  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm changePassword={changePasswordHandler}/>
    </section>
  );
}
export default UserProfile;
