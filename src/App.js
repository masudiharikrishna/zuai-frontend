import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList/index";
import BlogDetails from "./components/BlogDetails/index";
import NewPostForm from "./components/PostForm/index";
import UpdatePost from "./components/UpdatePost/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/new-post" element={<NewPostForm />} />
            <Route path="/update-post/:id" element={<UpdatePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
