import React from "react";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={ blogData.name }/>
      <About imageProp={ blogData.image } blogText={ blogData.about }/>
      <ArticleList blogPosts={ blogData.posts }/>
    </div>
  );
}

export default App;

// about: "A blog about learning React"
// image: "/static/media/logo.6ce24c58.svg"
// name: "Underreacted"
// posts: Array(3)
// 0: {id: 1, title: 'Components 101', date: 'December 15, 2020', preview: 'Setting up the building blocks of your site', minutes: 5}
// 1: {id: 2, title: 'React Data Flow', date: 'December 11, 2020', preview: 'Passing props is never passé', minutes: 15}
// 2: {id: 3, title: 'Function vs Class Components', preview: 'React, meet
