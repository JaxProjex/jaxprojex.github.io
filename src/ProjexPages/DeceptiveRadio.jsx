import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";

function DeceptiveRadio({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogEntry title={"What is it?"}>
                    <div>
                        <ul>
                            <li>Unattended Ground Sensor (UGS) designed to transmit pre-recorded audio files (.mp3).</li>
                            <li>Used to deceive opposing forces utilizing radio frequency survey and direction finding equipment.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"What does it do?"}>
                    <ul>
                        <li>Plays pre-recorded audio over a radio transmission.</li>
                        <li>Mimics real radio traffic to mislead enemy forces.</li>
                        <li>Aids in training by simulating radio signals of interest for SDR (Software Defined Radio) operators to survey & direction find.</li>
                    </ul>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        <ul>
                            <li>Needed a cheap training aid for detecting and direction finding radio signals with SDR equipment.</li>
                            <li>Provided a method to transmit false radio traffic to deceive opposing forces during near peer training events (force on force)</li>
                            <li>Designed to be easily built from cheap, expendable commercial parts.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <div>
                        <ul>
                            <li>Uses an MP3 module with an SD card containing audio files.</li>
                            <li>Plays audio through a 3.5mm connection into a Baofeng radio set to VOX mode.</li>
                            <li>Powered by a single non-rechargeable 5590 battery with voltage regulators.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How to improve it?"}>
                    <ul>
                        <li>3D printed case</li>
                    </ul>
                </ProjexBlogEntry>
            </>
        )
    }

    function returnBody2Html() {
        return (
            <>
                <ProjexBlogEntry title={"Software"}>
                    <div>
                        <ul>
                            <li>
                                N/A
                            </li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Hardware"}>
                    <div>
                        <ul>
                            <li>
                                Cheap Radio w/ VOX (Baofeng)
                            </li>
                            <li>
                                MP3 Module
                            </li>
                            <li>
                                SD Card with recorded .mp3 files (i used generation kill radio chatter for training events)
                            </li>
                            <li>
                                Adjustable voltage regulators (~15v to 7.4v & ~15v to 5v)
                            </li>
                            <li>
                                BTECH APRS-K1 cable (connection from Baofeng radio to MP3 module)
                            </li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
            </>
        )
    }





    return <ProjexBlog handleClose={handleClose}
                       title={pd.title}
                       description={pd.description}
                       images={pd.images}
                       link={pd.link}
                       tags={pd.tags}
                       body1={returnBody1Html()}
                       body2={returnBody2Html()}
    />
}

export default DeceptiveRadio;