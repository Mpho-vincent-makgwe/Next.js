import { getFeaturedEvents } from "@/helpers/api-utils"
import Head from "next/head";
import EventList from "@/components/events/EventList";
export default function Home(props) {
  return (
    <div>
      <Head lan='en'>
      <title>NextJs Events</title>
      <mete name='description' content="Learning New tools that will help me get to where  I want"/>
      </Head>
      <EventList list={props.events}/>
      </div>

  )
}
export const getStaticProps = async ()=>{
  const featuredEvents = await getFeaturedEvents();
  return{
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}