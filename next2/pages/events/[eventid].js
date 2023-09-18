import { getEventById,getFeaturedEvents } from "@/helpers/api-utils"
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import Head from "next/head";
import Comments from "@/components/input/comments";
import classes from './eventid.module.css'

const EventDetail=({ evente })=>{
const event = evente;
const { title, date, Location, image, description, id } = event

if(!event){return <div className="center"><div className={classes.loading}>
<div className={classes.spinner}/>
</div></div>}

return(
    <>
    <Head>
    <title>{title}</title>
      <meta name='description' content={description}/>
    </Head>

    <Fragment>
        <EventSummary title={title}/>
        <EventLogistics date={date} address={Location} image={image} imageAlt={title}/>
        <EventContent>
            <p>{description}</p>
        </EventContent>
        <Comments eventId={id}/>
    </Fragment>
    </>
)
}
// This function is used to generate paths for static pages.
export const getStaticPaths = async ()=>{
    // Fetch a list of featured events (async operation).
    const events = await getFeaturedEvents();
     // Transform the list of events into an array of path objects.
    const paths = events.map(event => ({params: {eventid: event.id}}))
    // Return an object with paths and a fallback setting.
    return {
        paths: paths,// List of paths for pre-rendering
        fallback: 'blocking',
    }
}
// This function is used to fetch data for a specific page.
export const getStaticProps = async ({params}) => {
    // Extract the event ID from the params object.
    const eventId = params.eventid;
    // Fetch data for the specific event using the event ID (async operation).
    const pagePATH = await getEventById(eventId);
return{
    props: {
        evente: pagePATH,
    },
    revalidate: 30
    //this is the most inportant part to discuss with coach.
}
}
export default EventDetail;