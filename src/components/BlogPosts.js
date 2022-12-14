import { BlogPost } from './BlogPost';
import classes from './BlogPosts.module.css';

function BlogPosts({blogPosts}) {
  const posts = blogPosts.map((post)=> <BlogPost key={post.id} blogPost={post}/>)
  return <ul classes={classes.list}>
    {posts}
  </ul>;
}

export default BlogPosts;
