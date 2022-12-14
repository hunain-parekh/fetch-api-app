export const BlogPost =({blogPost})=>{
    return(
        <li key={blogPost.id}>
            {blogPost.title}
        </li>
    );
}