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
                        Hello World.
                    </div>
                </div>

                <div className={"aboutbox-body-container"}>
                    <div className={"aboutbox-body"}>
                        <div>
                            I'm Jack Stratton. I like electronics, coding, shooting, video games and hiking.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutBox;