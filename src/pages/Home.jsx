import React from 'react';
import Announcement from '../component/Announcement';
import Categories from '../component/Categories';
import Navbar from '../component/Navbar';
import Slider from "../component/Slider";
import Products from '../component/Products';
import { Newsletter } from '../component/Newsletter';
import { Footer } from '../component/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Announcement/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
