import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./index.css";
import { FallingLines } from "react-loader-spinner";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    extract: "",
    content: "",
    image: ""
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
      const response = await fetch(`https://zuai-backend-u2kz.onrender.com/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
      });

      if (response.ok) {
        alert("Post updated successfully");
        navigate(`/`);
      } else {
        throw new Error("Error updating post");
      }
    } catch (err) {
      setSubmitLoading(false);
    }
  };


  return (
    <div className="new-post-form-container">
      <h2>Update Post</h2>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the Title"
            className="form-control"
            onChange={(e) => setPost({title:e.target.value})}
            value={post.title}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter the Image URL"
            className="form-control"
            onChange={handleChange}
            value={post.image}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="extract">Extract</label>
          <textarea
            id="extract"
            name="extract"
            placeholder="Enter the extract of content"
            className="form-control"
            onChange={handleChange}
            value={post.extract}
            required
            rows={3}
          ></textarea>
        </div>
        <div className="input-container">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            placeholder="Enter content of post"
            className="form-control"
            onChange={handleChange}
            value={post.content}
            required
            rows={6}
          ></textarea>
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary mb-5" disabled={submitLoading}>
            Submit
          </button>
          {submitLoading && (
            <FallingLines
              color="#4fa94d"
              width="50"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
