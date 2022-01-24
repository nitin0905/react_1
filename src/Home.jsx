import React from 'react'
import { NavLink } from 'react-router-dom';
import web from "../src/images/1.png";
import Common from "./Common";



const Home = () => {
    return (
        <>
           <Common name="Grow your business with" imgsrc={web} visit="/service" btnname="Get Started" para="We are the team of talented developers "/>

        </>

    );
};

export default Home;