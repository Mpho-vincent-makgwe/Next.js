import AllPosts from "@/componets/posts/all-posts"
import { getAllPosts } from "@/lib/posts-utils";
import Head from "next/head";
import { Fragment } from "react";
const AllPostsPage = ({allposts}) => {

    return (
        <div>
            <Head>
            <title>View Posts</title>
                <mete  name="FeedBack" content="Contact ME For FeedBack"/>
            </Head>
            <Fragment>
                <AllPosts posts={allposts}/>
            </Fragment>
        </div>
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
