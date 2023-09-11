import { getEventById,getFeaturedEvents } from "@/helpers/api-utils"
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";


const EventDetail=({ evente })=>{
const event = evente;
const { title, date, Location, image, description } = event
if(!event){return <div className="center"><p>Loading..</p></div>}

return(
    <>
    <Fragment>
        <EventSummary title={title}/>
        <EventLogistics date={date} address={Location} image={image} imageAlt={title}/>
        <EventContent>
            <p>{description}</p>
        </EventContent>
    </Fragment>
    </>
)
}
export const getStaticPaths = async()=>{
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({params: {eventid: event.id}}))
    return {
        paths: paths,
        fallback: 'blocking',
    }
}
export const getStaticProps =async ({params}) => {
    const eventId = params.eventid;
    const pagePATH =await getEventById(eventId);
return{
    props: {
        evente: pagePATH
    },
    revalidate: 30
}
}
export default EventDetail;