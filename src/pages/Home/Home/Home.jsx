import React from 'react';
import Services from './Services/Services';
import Project from '../Project/Project';
import Screenwash from '../ScreenWash/Screenwash';
import Testimionals from '../Testimionals/Testimionals';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='my-10'>
            <Banner></Banner>
            <Services></Services>
            <Screenwash></Screenwash>
            <Testimionals></Testimionals>
            <Project></Project>
        </div>
    );
};

export default Home;