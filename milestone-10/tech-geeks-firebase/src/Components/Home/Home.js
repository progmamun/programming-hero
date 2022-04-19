import React, { useEffect, useState, useContext } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";
import { BlogContext } from "../../App";

const Home = () => {
  // const [blogs, setBlogs] = useState([]);
  const [blogs, setBlogs] = useContext(BlogContext);

  useEffect(() => {
    fetch("https://retro-tech-talks.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className='blogs-container'>
      {blogs.map((blog, index) => (
        <Blog key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Home;
