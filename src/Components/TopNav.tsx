import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../CSS/TopNav.css';

function TopNav(props:any) {

    const navigate = useNavigate();

    function handleClick(num:number) {
        switch (num) {
            case 0:
                navigate("/")
                break
            case 1:
                navigate("/projex")
                break
            case 2:
                navigate("/about")
                break
            case 3:
                navigate("/qa")
                break
            case 4:
                navigate("/contact")
                break
            default:
                break
        }
    }

    return (
        <div className={"topnav"}>
            <div className={"topnav-left"}>
                <div className={"topnav-left-text"}> Jack A. Stratton</div>
            </div>
            <div className={"topnav-right"}>
                <div className={props.title !== "home" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => {handleClick(0)}}>Home</div>
                <div className={props.title !== "projex" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => {handleClick(1)}}>Projex</div>
                {/*<div className={props.title !== "about" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => {handleClick(2)}}>About</div> */}
                <div className={props.title !== "qa" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => {handleClick(3)}}>FAQ</div>
                <div className={props.title !== "contact" ? "topnav-right-links" : "topnav-right-links-selected"} onClick={() => {handleClick(4)}}>Contact</div>
            </div>
        </div>
    );
}

export default TopNav;