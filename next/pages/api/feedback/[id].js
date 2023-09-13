import { getFeedBackPath, extractFeedback } from "."
const Feedback = (req, res) => {
const feedbackId = req.query.id;
const filePath = getFeedBackPath(feedbackId);
const feedbackData = extractFeedback(filePath);
const selectedFeedback = feedbackData.find(feedback => feedback.id===feedbackId);
res.status(200).json({feedback: selectedFeedback});

}
// import { useParams } from 'react-router-dom';
// import { getFeedBackPath, extractFeedback } from '../api/feedback';
// const Feedback = ({feedbackItems})=>{
//     const { id } = useParams();
//     const item = feedbackItems.find((item) => item.id === id);
//     if (!item) {
//         return <div>Feedback not found</div>;
//     }
//     return(
//         <div>{item.text}</div>
//     )
// }
// export const getStaticProps =async () =>{
//     const filePath = getFeedBackPath();
//     const data = extractFeedback(filePath);
//     return{
//         props: {
//             feedbackItems: data,
//         },
//     };
// }
export default Feedback
