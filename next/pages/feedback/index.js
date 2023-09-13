import { useState, Fragment } from 'react';
import { getFeedBackPath, extractFeedback } from '../api/feedback'



const FeedbackPage = ({feedbackItems}) => {
        const [feedbackData, setFeedbackData] = useState();
 const openDetails =async(id)=>{
    const response = await fetch( `/api/feedback/${id}`);
    const data = await response.json();
    setFeedbackData(data.feedback)
    }
    return (
        <Fragment>
            {feedbackData && <p>{feedbackData.email}</p>}
        <ul>{feedbackItems.map((item) =><li key={item.id}>{item.text}<button onClick={openDetails.bind(null,item.id)}>Show Details</button></li>)}
        </ul>
        </Fragment>
        
    )
}
export const getStaticProps =async () =>{
    const filePath = getFeedBackPath();
    const data = extractFeedback(filePath);
    return{
        props: {
            feedbackItems: data,
        },
    };
}
export default FeedbackPage
