import { useRouter } from "next/router";
import { getEventById } from "@/dummy-data"
import { Fragment } from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
const EventDetail=()=>{
const router = useRouter();
const eventId = router.query.eventid;
const event = getEventById(eventId);
const { title, date, Location, image, description } = event
if(!event){return <p>No Event found</p>}
    return(
<>
<Fragment>
    <h1>Event Details</h1>
    <EventSummary title={title}/>
    <EventLogistics date={date} address={Location} image={image} imageAlt={title}/>
    <EventContent>
        <p>{description}</p>
    </EventContent>
</Fragment>
</>
)
}

export default EventDetail;