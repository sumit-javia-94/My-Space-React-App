import React from "react";
import Header from "../components/Header";
import HomeBanner from "../components/home/HomeBanner";
import Image from 'react-bootstrap/Image';
import FluidImage from '../assets/fluid-image.jpg';
import Cards from "../components/home/Cards";
import IncrementDecrement from "../components/home/IncrementDecrement";
import Footer from "../components/Footer";

function Home1(){
    return(
        <>
            <Header sitename="My Space"/>
            <HomeBanner/>
            <Cards/>
            <IncrementDecrement/>
            {/* Here full width image section*/}
            <section className="iwt-full-image">
                <Image className="w-100" src={FluidImage} alt="fluid-image"/>
            </section>
            <Footer sitename="My Space"/>
        </>
    );
}

export default Home1;