import { Fragment } from "react";
import MainHeader from "../layout/main-header";
const Layout=(props)=>{
return(
    <Fragment>
        <MainHeader/>
<main>
    {props.children}
</main>
    </Fragment>
)
};
export default Layout;