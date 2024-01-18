import React from 'react';
import Navbar from '../pages/sharred/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/sharred/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;