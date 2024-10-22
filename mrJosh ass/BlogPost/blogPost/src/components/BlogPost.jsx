import "./BlogPost.css"

const BlogPost = ({ title, author, content, date }) => {


  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <h4>By {author} on {date}</h4>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
