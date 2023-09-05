import { getFeaturedEvents } from "@/dummy-data"
import EventList from "@/components/EventList";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>

<EventList list={featuredEvents}/>
    </>
  )
}
