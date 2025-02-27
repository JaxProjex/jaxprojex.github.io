import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/About.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import AboutBox from "../Components/AboutBox";

function About() {
    return (
        <div className={"about-wrapper"}>
            <Header title={"about"}/>
            <TopNav title={"about"}/>
            <div className={"about"}>
                <AboutBox/>
            </div>
            <Footer/>
        </div>
    )
}
export default About;