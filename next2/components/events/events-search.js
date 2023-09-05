import Button from "@/components/ui/button";
import { useRef } from "react";
import theme from './events-search.module.css'
const EventSearch =(props)=>{
    const YearRef = useRef();
    const MonthRef = useRef();
    const SubmitHandler=(event)=>{
        event.preventDefault();
        const selectedYear = YearRef.current.value;
        const selectedMonth = MonthRef.current.value;
        props.onSearch(selectedYear,selectedMonth)
    }
return(
    <form className={theme.form} onSubmit={SubmitHandler}>
        <div className={theme.controls}>
            <div className={theme.control}>
                <label htmlFor="year">
                    Year
                </label>
                <select id="year" ref={YearRef}>
                    <option value={`2021`}>2021</option>
                    <option value={`2022`}>2022</option>
                </select>
            </div>
            <div className={theme.control }>
                <label htmlFor="month">Month</label>
                <select if='month' ref={MonthRef}>
                    <option value={1}>Jan</option>
                    <option value={2}>Feb</option>
                    <option value={3}>March</option>
                    <option value={4}>April</option>
                    <option value={5}>May</option>
                    <option value={6}>June</option>
                    <option value={7}>July</option>
                    <option value={8}>Aug</option>
                    <option value={9}>Sep</option>
                    <option value={10}>Oct</option>
                    <option value={11}>Nov</option>
                    <option value={12}>Dec</option>
                </select>
            </div>
        </div>
        <Button>Find Events</Button>
    </form>
)
}

export default EventSearch;