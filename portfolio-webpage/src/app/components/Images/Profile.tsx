import Image from 'next/image';
import CenterCard from '../Layouts/Card';
import theme from './Profile.module.css'
const ProfilePictur =()=>{
    return(
        <CenterCard>
            <Image src="/Mpv.png" alt="Mpho Vincent Makgwe" className={`rounded-full max-w-50  ${theme.profile}`} width={100} height={100}/>
        </CenterCard>
    )
};
export default ProfilePictur;