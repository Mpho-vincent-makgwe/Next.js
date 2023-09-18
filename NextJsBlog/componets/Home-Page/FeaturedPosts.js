import PostsGrid from '../posts/posts-grid'
import theme from './featured-posts.module.css'
const FeaturedPosts = ({posts}) => {

    
    return (
        <section className={theme.latest}>
            <h2>FeaturedPosts</h2>
            <PostsGrid posts={posts}/>
        </section>
    )
}

export default FeaturedPosts
