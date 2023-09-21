import PostContent from "@/componets/posts/post-detail/post-content"
import { getPostData,gtPostsFiles } from "@/lib/posts-utils";
import Head from "next/head";
import { Fragment } from "react";

const SinglePostsPage = ({post}) => {

    return (
        <>
            <Fragment>
                <Head>
                    <title>{post.title}</title>
                    <mete name="description" content={post.excerpt}/>
                </Head>
                <main>
                    <PostContent post={post}/>
                </main>
            </Fragment>
        </>
    )
};
export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    }
}

export const getStaticPaths = async () => {
    const postFileNames = gtPostsFiles();
    const slugs = postFileNames.map(fileName=>fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug =>({params: { slug: slug }})),
        fallback: 'blocking',
    }
}



export default SinglePostsPage

