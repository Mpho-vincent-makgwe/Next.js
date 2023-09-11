import { getFeaturedEvents } from "@/helpers/api-utils"
import EventList from "@/components/events/EventList";
export default function Home(props) {
  return (
<EventList list={props.events}/>
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