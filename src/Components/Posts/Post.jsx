import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    
    const {id, title, body} = post;

    return (
        <div className='post'>
            <h5>ID: {id}</h5>
            <h4>{title}</h4>
            {/* <p>{body}</p> */}
            <Link className='link' to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
        </div>
    );
};

export default Post;