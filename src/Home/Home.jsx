import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import First from '../First/First';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <First></First>
        </div>
        
    );
};

export default Home;