// import Link from "next/link";
import theme from './event-item.module.css'
import Calender from '../icons/Calender-icon';
import Button from "../ui/button";
import RightArrow from '../icons/arrow-right-icon';
import Addr from '../icons/Location-icon';
const EventItem =(props)=>{
const {image, title, date, Location, id} = props;
const readableDateStr = new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month:'long',
    year: 'numeric',
});
const Address= Location.replace(', ', '\n')
const ExploreLink = `/events/${id}`;
    return(
        <>
        <li className={theme.item}>
            <img src={ '/' + image} alt={`${title}`}/>
            <div className={theme.content}>
                <div><h2>{title}</h2></div>
                <div className={theme.date}><Calender/><time>{readableDateStr}</time></div>
                <div className={theme.adress}>
                    <address><Addr/>{Address}</address></div>
            </div>
            <div className={theme.actions}>
                <Button link={ExploreLink}><span>Explore Event</span><RightArrow/></Button>
                </div>
        </li>
        </>
    )
}

export default EventItem;