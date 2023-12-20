import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend/Friend';
import './Friend/Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends);
    return (
        <div>
            <h2>This is Our total Friends: {friends.length}</h2>
            <div className='friendsAll'>
                {
                    friends.map(friend => <Friend 
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;