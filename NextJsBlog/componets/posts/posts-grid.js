import PostItem from './post-item';
import theme from './posts-grid.module.css';

const PostsGrid=({ posts })=> {

  return (
    <ul className={theme.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
