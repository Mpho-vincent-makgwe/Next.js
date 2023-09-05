import {useRouter} from 'next/router'

const BlogPostPage=()=>{
    const rout = useRouter();
    console.log(rout.asPath);
    console.log(rout.pathname);
    console.log(rout.query);
    return(
    <>
    <h1>The Blog Post i don't know</h1>
    </>)
}

export default BlogPostPage