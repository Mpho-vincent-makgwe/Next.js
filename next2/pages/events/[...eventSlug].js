import { getFilteredEvents } from "@/helpers/api-utils";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import { Fragment } from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/events/error-alert/error-alert";
import Head from "next/head";
const FilteredEvent=(props)=>{
const { events, cal, filteredData } = props;
const FilteredEvents = events;
const date = new Date(cal.year, cal.month - 1)
if(props.hasEror){
        return<Fragment><ErrorAlert><p>Invalid Filter please Adjust your values</p>
        <div className={`center`}><Button link='/events'>Show AllEvents</Button></div>
        </ErrorAlert></Fragment>
    }
    if(!FilteredEvent||FilteredEvents.length===0){return(
            <Fragment><ErrorAlert><p>No events found for the chosen filter!</p>
            <div className={`center`}><Button link='/events'>Show AllEvents</Button></div>
            </ErrorAlert></Fragment>
    )}
    if(!filteredData){
        return(
            <div>
                <ErrorAlert>
                    <h1>There is no event from that </h1>
                    </ErrorAlert>
            </div>
        )
    }
    return(
        <>
        <Head>
        <title>Filtered Events</title>
      <mete name='description' content={`All Events for ${numMonth}/${numYear}`}/>
        </Head>
        <Fragment>
            
        <ResultsTitle date={date}/>
        <EventList list={FilteredEvents}/>
        </Fragment></>
        
    )
}
export const getServerSideProps = async ({params})=>{
    const filteredData = params.eventSlug;
    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    if(isNaN(numYear) ||
    isNaN(numMonth) || 
    numYear>2031 ||
    numYear < 2021 || 
    numMonth < 1 ||
    numMonth > 12
    ){
        return{
            props:{hasEror: true}
            }}
            const FilteredEvents = await getFilteredEvents({year : numYear,month: numMonth});
            return{
        props: {
        events: FilteredEvents,
        cal: {year: numYear,month: numMonth},
        filteredData: filteredData
    }};
}
export default FilteredEvent;