import React from 'react';
import { Helmet } from 'react-helmet-async';
import BannerSection from '../BannerSection';

const Home = () => {
    return (
      <div className='min-h-[70vh]'>
        <Helmet>
          <title>Trade Snap | Home</title>
        </Helmet>
        <BannerSection/>
      </div>
    );
};

export default Home;