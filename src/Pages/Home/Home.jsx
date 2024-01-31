import React from 'react';
import Banner from './Home/Banner/Banner';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>M-Tech</title>
                </Helmet>
            </HelmetProvider>
            <Banner/>
        </div>
    );
};

export default Home;