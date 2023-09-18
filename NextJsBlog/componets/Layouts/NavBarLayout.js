import NavBar from "@/componets/other/NavBar"
import { Fragment } from "react"

const NavBarLayout = ({children}) => {
    return (
        <div>
            <Fragment>
            <NavBar/>
                <main>{children}</main>
            </Fragment>
        </div>
    )
}

export default NavBarLayout
