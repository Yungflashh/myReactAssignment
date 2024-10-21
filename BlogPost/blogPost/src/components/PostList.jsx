
import BlogPost from './BlogPost';

const PostList = () => {
  const posts = [
    {
      title: "Learning React",
      author: "David Adenusi",
      content: "React is a powerful library for building user interfaces and it's mainly based on components usage...",
      date: "2024-10-21"
    },
    {
      title: "Understanding JavaScript",
      author: "Kayode Adenusi",
      content: "JavaScript is a versatile programming language, it might seem tough at first, but with constant practice, you should find it easier",
      date: "2024-10-26"
    },
    {
      title: "CSS Tips and Tricks",
      author: "Ayomide Adenusi",
      content: "CSS can be tricky, but with my E-Book (winks), it should get you on track",
      date: "2024-10-22"
    }
  ];

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <BlogPost 
          key={index}
          title={post.title}
          author={post.author}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default PostList;
