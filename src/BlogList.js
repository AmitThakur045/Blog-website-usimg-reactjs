import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>written by {blog.author}</p>
              <p>{blog.body.substring(0, 80)}...</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
