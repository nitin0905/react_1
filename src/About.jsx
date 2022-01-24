import React from 'react'
import { NavLink } from 'react-router-dom';
import Aimg from "../src/images/2.png";
import Common from "./Common";



const About = () => {
    return (
        <>
           <Common name="Welcome to About page" imgsrc={Aimg} visit="/contact" btnname="Contact Now" para="We are best Organisation in JS development"/>

        </>

    );
};

export default About;