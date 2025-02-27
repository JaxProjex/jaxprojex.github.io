import React from 'react';
import '../CSS/Footer.css';

function Header(props:any) {
    return (
        <div className={"footer"}>
            <div className={"footer-row"}>
            <div className={"footer-content-container"} onClick={() => {window.open("https://www.linkedin.com/in/jack-stratton-139563278/")}}>
                <span className={"footer-content-icon"}>LinkedIn</span>
            </div>

            <div className={"footer-content-container"} onClick={() => {window.open("https://github.com/JaxProjex")}}>
                <span className={"footer-content-icon"}>GitHub</span>
            </div>

                {/*
            <div className={"footer-content-container"} onClick={() => {window.open("https://google.com")}}>
                <span className={"footer-content-icon"}>[@]</span><span className={"footer-content-text"}> = Resume</span>
            </div>
            */}

            </div>
        </div>
    )
}
export default Header