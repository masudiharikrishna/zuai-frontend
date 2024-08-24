import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList/index"
import BlogDetails from "./components/BlogDetails/index"
import NewPostForm from "./components/PostForm/index"
import UpdatePost from "./components/UpdatePost/index"


class App extends Component{
  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<BlogList />} />
          <Route exact path="/blog/:id" element={<BlogDetails />} />
          <Route exact path="/new-post" element={<NewPostForm/>}/>
          <Route exact path="/update-post/:id" element={<UpdatePost/>}/>
        </Routes>
      </Router>
    )
  }
}
export default App