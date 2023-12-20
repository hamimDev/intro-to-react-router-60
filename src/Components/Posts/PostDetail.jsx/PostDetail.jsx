import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const {id,title,user,userId,body} = post;

    return (
        <div>
            <h3>This is post Detail of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetail;