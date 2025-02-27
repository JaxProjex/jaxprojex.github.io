import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../CSS/TopNav.css';

function TopNav(props:any) {

    const navigate = useNavigate();

    return (
        <div className={"topnav"}>
            <div className={"topnav-left"}>
                <div className={"topnav-left-text"}>Jack A. Stratton</div>
            </div>
            <div className={"topnav-right"}>
                {/*<div className={props.title !== "home" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => navigate("/")}>Home</div>*/}
                <div className={props.title !== "projex" ? "topnav-right-links" : "topnav-right-links-selected"}
                     onClick={() => navigate("/projex")}>Projex
                </div>
                {/*
                <div className={props.title !== "xtra" ? "topnav-right-links" : "topnav-right-links-selected"}
                     onClick={() => navigate("/xtra")}>Xtra
                </div>*/}
                <div className={props.title !== "about" ? "topnav-right-links" : "topnav-right-links-selected"}
                     onClick={() => navigate("/about")}>About
                </div>
                {/*<div className={props.title !== "qa" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => navigate("/qa")}>FAQ</div>*/}
                {/*<div className={props.title !== "contact" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => navigate("/contact")}>Contact</div>*/}
            </div>
        </div>
    );
}

export default TopNav;