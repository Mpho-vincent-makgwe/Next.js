import { useEffect, useState } from "react";
// import useSWR from "swr";

const fireBase = `https://nextjs-course-9b23d-default-rtdb.firebaseio.com/sales.json`;

const LastSalsePage = (props) => {
    const [sales, setSales]= useState(props.sales);
    const [isLoading, setIsLoading]=useState(false);
    useEffect(()=>{
        setIsLoading(true);
        fetch(`${fireBase}`)
    .then(response=>response.json())
    .then(data=>{
        const tranformSales = [];
        for(const key in data){
            tranformSales.push({
                id: key, 
                username: data[key].username, 
                volumn: data[key].volumn});
        }

        setSales(tranformSales);
        setIsLoading(false);
    } )
    }, [])
    if(isLoading){
        <div>
        <p>Loading.....</p>
        </div>
    }
    if (!sales){
        return<p>No Data</p>
    }
    return (
        <div>
            <ul>
                {sales.map(sale =><li key={sale.id}>{sale.username} - {sale.volumn}</li>)}
            </ul>
        </div>
    )
}
export const getStaticProps = async()=>{
    const response = await fetch(`${fireBase}`)
    const data = response.json()
        const fetchedSales = [];
        for(const key in data){
            fetchedSales.push({
                id: key,
                username: data[key].username,
                volumne: data[key].volumn,
            });
        }
        return{ props: {sales:fetchedSales}, revalidate: 10}
    
}
export default LastSalsePage;
