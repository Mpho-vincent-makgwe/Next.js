import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postDiroctory = path.join(process.cwd(), 'posts');

export const gtPostsFiles = ()=>{
    return fs.readdirSync(postDiroctory)
}
export const getPostData = (fileName)=>{
    const postSlug = fileName.replace(/\.md$/, '');
    const filePath = path.join(postDiroctory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content } = matter(fileContent);
    
    const Pdata = {
        slug: postSlug,
        ...data,
        content,
    };
    return Pdata
}

export const getAllPosts = () => {
const postFiles = gtPostsFiles();
const allPost = postFiles.map(postFile =>{ return getPostData(postFile)});
const All = allPost.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
return All;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPost = allPosts.filter(post => post.isFeatured)
    return featuredPost;
}