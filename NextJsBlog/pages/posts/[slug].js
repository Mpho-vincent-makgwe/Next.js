import PostContent from "@/componets/posts/post-detail/post-content"
import { getPostData,gtPostsFiles } from "@/lib/posts-utils";

const SinglePostsPage = ({post}) => {

    return (
        <div><PostContent post={post}/></div>
    )
};
export const getStaticPaths = async ({}) => {
    const postFileNames = gtPostsFiles();
    const slugs = postFileNames.map(fileName=>fileName.replace(/\.md$/, ''))

    return {
        paths: slugs.map(slug =>({params: { slug: slug }})),
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        props: {
            post: postData,
        },
        revalidate: 60
    }
}

export default SinglePostsPage

