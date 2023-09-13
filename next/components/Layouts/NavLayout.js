import { Fragment } from "react"
import NavBar from "../others/NavBar"

const NavLayout = ({children}) => {
    return (
        <>
        <NavBar/>
        <Fragment>
            <div>{children}</div>
        </Fragment>
        </>
    )
}

export default NavLayout
