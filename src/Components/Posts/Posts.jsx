import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './post';
import './post.css'

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h1>All Post are here: {posts.length}</h1>
            <div className='posts'>
                {
                    posts.map(post => <Post 
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;