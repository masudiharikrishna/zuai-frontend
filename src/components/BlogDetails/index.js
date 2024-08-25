import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import "./index.css";
import { FallingLines } from "react-loader-spinner";

const BlogDetails = () => {
const { id } = useParams();
const [blog, setBlog] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate();

useEffect(() => {
    const fetchBlog = async () => {
    try {
        const response = await fetch(`https://zuai-backend-u2kz.onrender.com/api/posts/${id}`);
        const data = await response.json();
        setBlog(data);
        setIsLoading(false);
    } catch (error) {
        console.error("Error fetching blog:", error);
        setIsLoading(false);
    }
    };

    fetchBlog();
}, [id]);

const handleUpdate = ()=>{
    navigate(`/update-post/${id}`)
}

const handleDelete = async () =>{
    const confirmDelete = window.confirm("Are you sure want to delete this post?")
    try{
        if (confirmDelete) {
            const response  = await fetch(`https://zuai-backend-u2kz.onrender.com/api/posts/${id}`, {
                method: "DELETE",
            });
            console.log(response)
            if (response.status === 200){
                alert("post deleted successfully")
                navigate("/")
            }
            else{
                alert("Error deleting post")
            }
            
        }
    }
    catch(error){
        console.error("Error deleting post:", error);
    }
}

return (
    <div className="blog-details-container">
    {isLoading ? (
    <div className="loading-container">
    <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
                />
    </div>
    ) : blog ? (
    <div className="blog-details">
        <h1>{blog.title}</h1>
        <img src={blog.image}/>
        <p>{blog.content}</p>
        <div>
        <button className="btn btn-danger mb-5" onClick={handleDelete}>Delete Post</button>
        <button className="btn btn-warning mb-5" onClick={handleUpdate}>Update Post</button>
        </div>
    </div>
    ) : (
    <p>Blog not found.</p>
    )}
</div>
);
};

export default BlogDetails;
