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
        evente: pagePATH,
    },
    revalidate: 30
}
}
export default EventDetail;