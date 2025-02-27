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
                            I joined the US Army out of highschool at the age of 18 as an Army Ranger Infantryman, where I followed a fairly traditional ranger career path,
                            serving as a 240 Machine Gunner, Grenadier, SAW Gunner, FireTeam Leader and later on as a Sniper Team Leader. I was fortunate enough
                            to attend a technical surveillance course that would cause a career shift, where I would transition to the Reconnaissance, Surveillance, and Target Acquisition section of my unit.
                            This experience ultimately pushed me to pursue a career in technology. After a few years, I had another great opportunity to transition into a small R&D software section at my unit where I was able to work on a variety of applications for the DoD.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutBox;