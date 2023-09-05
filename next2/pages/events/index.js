import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
const AllEvents=()=>{
    const events = getAllEvents();
    const router = useRouter();
const findEventsHandler=(year,month)=>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
}
    return(
        <>
        <EventSearch onSearch={findEventsHandler}/>
        <EventList list={events}/></>
    )
}

export default AllEvents;