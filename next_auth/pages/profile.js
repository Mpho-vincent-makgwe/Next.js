
import UserProfile from '../components/profile/user-profile';
import { getSession } from 'next-auth/react';
function ProfilePage() {
  return (
            <UserProfile />
          );
}
export const getServerSideProps = async ({req})=> {
  // code
  const session = await getSession({req: req})
  if(!session){
  return {
    redirect: {
    destination: '/auth',
    permanent: false
    }
  }}
  return {
    props: { session },
  }
}

export default ProfilePage;
