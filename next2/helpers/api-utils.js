export const getAllEvents = async ()=> {
const events = await fetch('https://nextjs-course-9b23d-default-rtdb.firebaseio.com/events.json');
const data = await events.json();
const res = [];
for (const key in data){
    res.push({
        id:key,
        ...data[key]
    })
}
return res;
}
export const getFeaturedEvents= async () => {
    const allEvents = await getAllEvents()
    return allEvents.filter((event) => event.isFeatured);
  }


  export const  getFilteredEvents = async(dateFilter)=> {
    const allEvents = await getAllEvents();
    const { year, month } = dateFilter;
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export const getEventById= async(id)=> {
    const allEvents = await getAllEvents()
    return allEvents.find((event) => event.id === id);
  }