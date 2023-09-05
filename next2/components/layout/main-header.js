import Link from "next/link";
import theme from './main-header.module.css'
const MainHeader = ()=>{
    return(
        <header className={theme.header}>
            <div className={theme.logo}> 
                <Link href={`/`}>NextEvents</Link>
            </div>
            <nav className={theme.navigation}>
                <ol>
                    <Link href={`/events`}> BrowseAll Events</Link>
                </ol>
            </nav>
        </header>
    )
}
export default MainHeader;