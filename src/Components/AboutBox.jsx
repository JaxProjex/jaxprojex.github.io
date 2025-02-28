import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/AboutBox.css';
import '../CSS/Global.css';

function AboutBox() {
    return (
        <div className={"aboutbox-wrapper"}>

            <div className={"aboutbox-container"}>

                <div className={"aboutbox-title-container"}>
                    <div className={"aboutbox-title"}>
                        Hello world. I'm Jack Stratton.
                    </div>
                </div>

                <div className={"aboutbox-body-container"}>
                    <div className={"aboutbox-body"}>
                        <div>
                            <p>
                                I enjoy electronics, coding, video games, and sci-fi movies.
                                I have a passion for building a variety of projects as a way to expand my technical expertise.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutBox;