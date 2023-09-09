import Link from "next/link"


const NavBar = () => {
    return (
        <div>
            <Link href={`/`}>Home</Link>
            <Link href={`/about`}>About Page</Link>
            <Link href={`/about/team`}> About Team</Link>
            <Link href={`/about/someone`}> About Someone</Link>
            <Link href={`/listofpost`}> List of posts</Link>
        </div>
    )
}

export default NavBar
