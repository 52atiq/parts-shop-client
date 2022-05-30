import React from 'react';
import Banner from './Banner';
import BussinessStat from './BussinessStat';
import MoreInfo from './MoreInfo';
import Products from './Products';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            {/* <Review></Review> */}
            <BussinessStat></BussinessStat>
            <MoreInfo></MoreInfo>
            <Services></Services>

        </div>
    );
};

export default Home;