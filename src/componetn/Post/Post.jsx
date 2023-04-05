import React from 'react';
import'./Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
  const {id ,title , body}=post;
  const navigate =useNavigate();
  const handleNavigation =()=>{
      navigate(`/post/${id}`)
  }
  return (
    <div className='post'>
      <h4>ID:{id}</h4>
      <h4>{title}</h4>
      <p>{body}</p>
      <Link to={`/post/${id}`}>Show Detais</Link>
     <Link to={`/post/${id}`}><button>Show Post DETAILS</button></Link>
     <button onClick={handleNavigation}>With Button Hndler</button>
    </div>
  );
};

export default Post;