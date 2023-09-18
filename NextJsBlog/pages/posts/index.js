import AllPosts from "@/componets/posts/all-posts"
import { getAllPosts } from "@/lib/posts-utils";
const AllPostsPage = ({allposts}) => {

    return (
        <div><AllPosts posts={allposts}/></div>
    )
}
export const getStaticProps = async ({ params }) => {
    const allpost =  getAllPosts();

    return {
        props: {
            allposts: allpost
        },
    }
}

export default AllPostsPage
