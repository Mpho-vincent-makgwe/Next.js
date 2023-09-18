import Link from "next/link"
import Logo from "../Layouts/Logo"
import theme from './main-navigation.module.css'
const NavBar = () => {
    return (
        <header className={theme.header}>
            <><Link href={`/`}><Logo/></Link></>
            <nav>
            <ul>
                <li><Link href={`/posts`}>Posts</Link></li>
                <li><Link href={`/contact`}>Contacts</Link></li>
            </ul>
            </nav>
        </header>
    )
}

export default NavBar
