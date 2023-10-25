import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Trade Snap | Home</title>
        </Helmet>
        <h1 className="text-5xl">This is form home</h1>
      </div>
    );
};

export default Home;