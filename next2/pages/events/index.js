import { getAllEvents } from "@/helpers/api-utils";
import EventList from "@/components/events/EventList";
import EventSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import Head from "next/head";
const AllEvents=({allEvents})=>{
    const events  = allEvents;
    const router = useRouter();
const findEventsHandler=(year,month)=>{
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
};
    return(
        <>
        <Head>
        <title>All Events</title>
      <mete name='description' content="All the contents"/>
        </Head>
        <EventSearch onSearch={findEventsHandler}/>
        <EventList list={events}/></>
    )
}
export const getStaticProps =async()=>{
const events =await getAllEvents();
    return{
        props: {
            allEvents: events
        },
        revalidate: 60
    }
}

export default AllEvents;