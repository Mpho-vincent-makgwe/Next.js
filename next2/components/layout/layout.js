import { Fragment, useContext } from "react";
import MainHeader from "../layout/main-header";
import Notification from "../ui/notification";
import NotificationContext from "@/store/notification-context";

const Layout=(props)=>{
    const notCtx = useContext(NotificationContext)
    const actNot = notCtx.notification
return(
    <Fragment>
        <MainHeader/>
<main>
    {props.children}
    {actNot && (
        <Notification title={actNot.title} message={actNot.message} status={actNot.status}/>
    )}
    
</main>
    </Fragment>
)
};
export default Layout;