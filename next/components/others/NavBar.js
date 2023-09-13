import Link from 'next/link'
const NavBar = () => {
    return (
        <div>
            <h1>This is the beggining of a new World</h1>
            <ul>
            <li><Link  href='/'>Home</Link></li>
            <li><Link  href='/about'>About</Link></li>
            <li><Link href='/portfolio'>Portfolio Page</Link></li>
            <li><Link href='/feedback'>view feedback</Link></li>
            <li><Link href='/clients'>Clients</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
