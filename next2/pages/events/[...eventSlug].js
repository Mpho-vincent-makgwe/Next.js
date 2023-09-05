import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/events/results-title";
import { Fragment } from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/events/error-alert/error-alert";

const FilteredEvent=()=>{
    const rout = useRouter();

    const filteredData = rout.query.eventSlug;
    console.log(filteredData)
    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    
if(isNaN(numYear) ||
 isNaN(numMonth) || 
 numYear>2031 ||
  numYear < 2021 || 
  numMonth < 1 ||
   numMonth > 12 ){
        return<Fragment><ErrorAlert><p>Invalid Filter please Adjust your values</p>
        <div className={`center`}><Button link='/events'>Show AllEvents</Button></div>
        </ErrorAlert></Fragment>
    }
const FilteredEvents = getFilteredEvents({year : numYear,month: numMonth});
const date = new Date(numYear,numMonth - 1)
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
        <Fragment>
            
        <ResultsTitle date={date}/>
        <EventList list={FilteredEvents}/>
        </Fragment>
    )
}

export default FilteredEvent;