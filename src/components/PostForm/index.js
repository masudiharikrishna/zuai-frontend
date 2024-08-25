import { Component } from "react";
import "./index.css";
import { FallingLines } from "react-loader-spinner";

class NewPostForm extends Component{
    state={
        title:"",
        extract: "",
        content: "",
        image: "",
        submitLoading : false
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        this.setState({submitLoading : true})
        const {title, extract, content, image} = this.state
        const response = await fetch("https://zuai-backend-u2kz.onrender.com/api/posts/",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                image,
                content,
                extract
            }),
        });
        if (response.ok){
            alert("Post created successfully")
            this.setState({
                title:"",
                image: "",
                extract: "",
                content: "",
                submitLoading: false
            })
        }
        else{
            this.setState({submitLoading:false})
            alert("Error creating post. please try again Later")
        }
    } 

    render(){
        return (
            <div className="new-post-form-container">
                <h2>Create a new post</h2>
                <form className="new-post-form" onSubmit={this.handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="title" className="">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            placeholder="Enter the Title" 
                            className="form-control" 
                            onChange={(e)=>this.setState({title: e.target.value})} 
                            value = {this.state.title}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="imageurl" className="">Image URL</label>
                        <input 
                            type="text" 
                            id="imageurl" 
                            placeholder="Enter the Image URL" 
                            className="form-control" 
                            onChange={(e)=>this.setState({image: e.target.value})} 
                            value = {this.state.image}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="extract" className="">Extract</label>
                        <textarea 
                            type="text" 
                            id="extract" 
                            placeholder="Enter the extract of content" 
                            className="form-control"
                            onChange={(e)=>this.setState({extract: e.target.value})}    
                            required
                            value={this.state.extract}
                            rows={3}
                            ></textarea>
                    </div>
                    <div className="input-container">
                        <label htmlFor="content" className="">Content</label>
                        <textarea 
                            type="text" 
                            id="content" 
                            placeholder="Enter content of post" 
                            className="form-control"
                            onChange={(e)=>this.setState({content: e.target.value})}    
                            required 
                            value={this.state.content}
                            rows={6}
                            ></textarea>
                    </div>
                <div className="button-container">
                <button type="submit" className="btn btn-primary mb-5" disabled={this.state.submitLoading}>Submit</button>
                {this.state.submitLoading && <FallingLines
                color="#4fa94d"
                width="50"
                visible={true}
                ariaLabel="falling-circles-loading"
                />}
                </div>
                </form>
            </div>
        )
    }
}
export default NewPostForm