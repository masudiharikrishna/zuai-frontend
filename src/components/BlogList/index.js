import React, { Component } from "react";
import "./index.css";
import { FallingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

class BlogList extends Component {
  state = {
    isLoading: false,
    blogs: [],
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("https://zuai-backend-u2kz.onrender.com/api/posts/");
    const fetchedBlogs = await response.json();
    this.setState({ blogs: fetchedBlogs, isLoading: false });
  }

  render() {
    const { isLoading, blogs } = this.state;
    const BlogItem = ({ blogDetails }) => {
      const { title, extract, image, _id } = blogDetails;
      return (
        <div className="blog-item">
          <img src={image} className="image" alt={title}/>
          <div className="blog-item-details">
            <h4>{title}</h4>
            <p>{extract}</p>
            <Link to={`/blog/${_id}`} className="link">Read More →</Link>
          </div>
        </div>
      );
    };

    return (
      <div>
        {isLoading ? (
            <div className="loading-container">
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
                />
            </div>
        ) : (
          <div>
          <h3 className="text-center">Blog List</h3>
            <div className="blog-item-container">
                {blogs.map((eachBlog) => (
                <BlogItem key={eachBlog._id} blogDetails={eachBlog} />
                ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BlogList;
