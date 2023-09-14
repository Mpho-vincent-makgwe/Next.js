import { getFeaturedEvents } from "@/helpers/api-utils"
import EventList from "@/components/events/EventList";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { Fragment } from "react";
export default function Home(props) {

  return (
    <Fragment>
        <div>
      <NewsletterRegistration/>
      <EventList list={props.events}/>
      </div>
    </Fragment>


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