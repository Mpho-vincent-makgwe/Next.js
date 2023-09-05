import EventItem from "./EventItem"
import theme from './event-list.module.css'
const EventList =(props)=>{
const { list } = props
return(
    <ul className={theme.list}>
    {list.map(event => 
    <EventItem 
    id={event.id} 
    title={event.title} 
    key={event.id}
    image={event.image} 
    Location={event.Location} 
    date={event.date}
    />
    )}
    </ul>
)

}

export default EventList