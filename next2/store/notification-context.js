import { createContext, useState, useEffect } from "react";

const NotificationContext = createContext({
    notification: null, //{title, message, status}
    showNotiofication: (notifData) => { },
    hideNotiofication: () => { },
});
export const NotificationContextProvider = ({ children }) => {
    const [acNotf, setActNotf] = useState();

    useEffect(() => {
        if (acNotf && (acNotf.status === "success" || acNotf.status === "error")) {
            const timer = setTimeout(() => {
                setActNotf(null);
            }, 3000);
            return()=>{
                clearTimeout(timer)
            }
        }
    }, []);

    const showNotificationHandler = (notifData) => {
        setActNotf(notifData);
    };

    const hideNotificationHandler = () => {
        setActNotf(null);
    };

    const context = {
        notification: acNotf,
        showNotiofication: showNotificationHandler,
        hideNotiofication: hideNotificationHandler,
    };
    return (
        <NotificationContext.Provider value={context}>
            {children}
        </NotificationContext.Provider>
    );
};
export default NotificationContext;
