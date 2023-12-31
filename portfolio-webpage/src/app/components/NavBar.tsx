
import Link from 'next/link';
// import theme from './NavBar.module.css'
import Twitter from './Icons/Twitter';
import GitHubIcon from './Icons/GitHub';
import Logo from './Logo';
const NavBar =()=>{

    return(
        <header className='w-full px-0 py-0 bg-zinc-600 flex text-white font-medium items-center justify-between ' >
            <nav className={`  text-white w-1/3 flex justify-between`}>
            <Link href={`/Resume`} className='text-2l hover:bg-blue-300 rounded'>Resume</Link>
            <Link href={`/About`} className='text-l hover:bg-blue-300 rounded'>About</Link>
            <Link href={`/Projects`} className='text-l hover:bg-blue-300 rounded'>Projects</Link>
        </nav>
        <h1 className=' underline text-opacity-500 text-myColor1 hover:bg-blue-300 rounded'><Logo/></h1>


        <nav className='flex justify-between w-1/4 m-1 '>
            <Link href={`https://twitter.com/youngstoningV`} target={`_blank`} ><Twitter/></Link>
            <Link href={`https://github.com/Mpho-vincent-makgwe`} target={`_blank`} ><GitHubIcon/></Link>
            <Link href={`https://www.linkedin.com/in/mpho-vincent-makgwe-1ab386199/`} target={`_blank`}  className='text-l hover:bg-blue-300 rounded'>LinkedIn</Link>
        </nav>
        </header>
        
    )
}

export default NavBar;