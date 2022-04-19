import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../../App";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [blog, setBlog] = useState({});
  const [blogs] = useContext(BlogContext);
  const blog = blogs.find((blog) => blog._id == id);

  // useEffect(() => {
  //   fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setBlog(data));
  // }, [id]);

  return (
    <>
      <div className='header-gradient' />
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
