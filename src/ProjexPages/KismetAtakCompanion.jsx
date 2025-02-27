import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogBody from "../ProjexComponents/ProjexBlogBody";
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";
import ProjexBlogDrop from "../ProjexComponents/ProjexBlogDrop";

function KismetAtakCompanion({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
            <ProjexBlogEntry title={"What is it?"}>
                <div>
                    <ul>
                        <li>Solution that forwards survey data from Kismet to ATAK for real-time visualization of scanned devices</li>
                    </ul>
                </div>
            </ProjexBlogEntry>
                <ProjexBlogEntry title={"What does it do?"}>
                    <ul>
                        <li>Monitors WiFi and Bluetooth signals using Kismet and automatically forwards detected device data to ATAK.</li>
                        <li>Provides real-time alerts and visualization of targeted MAC addresses and SSIDs.</li>
                        <li>Eliminates the need for manual data exports and conversions for mapping software (.kismet to .kml)</li>
                        <li>Supports multiple connection methods for sending data to ATAK, including WiFi, USB tethering, Ethernet, and Cellular</li>
                    </ul>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        <ul>
                            <li>Needed a real-time system to alert and plot detected targeted devices to ATAK for presence notification and aid in direction finding.</li>
                            <li>Prior methods required manual interaction with Kismet UI, exporting files, and converting them to mapping formats.</li>
                            <li>This plugin streamlined the workflow, improving efficiency for field WiFi survey operations.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <div>
                        <ul>
                            <li>The Kismet ATAK Companion plugin is installed in the Kismet plugin directory.</li>
                            <li>A background Python script monitors when Kismet service starts and triggers the Kismet ATAK Companion server to start.</li>
                            <li>Users can configure settings through a dedicated menu in the Kismet Web UI.</li>
                            <li>Device data can be sent to ATAK using WiFi, USB tethering, Ethernet adapters, or Cellular.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How to improve it?"}>
                    <ul>
                        <li>Integrate functions to extend the existing Kismet server instead of creating a separate backend for the plugin.</li>
                        <li>support plugin to run while kismet is run as sudo.</li>
                        <li>support "git" Kismet version.</li>
                        <li>Add RSSI based direction finding feature.</li>
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
                        <li>Linux (Raspbian OS tested)</li>
                        <li>Kismet (Git Version)</li>
                        <li>gpsd</li>
                    </ul>
                </div>
            </ProjexBlogEntry>

            <ProjexBlogEntry title={"Hardware"}>
                <div>
                    <ul>
                        <li>Raspberry Pi 3</li>
                        <li>USB GPS or UART GPS</li>
                        <li>USB Wifi Dongle (or nexmon firmware)</li>
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

export default KismetAtakCompanion;