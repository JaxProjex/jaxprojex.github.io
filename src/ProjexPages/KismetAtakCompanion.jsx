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
                    A solution to forward survey data from Kismet to ATAK Map to visualize scanned devices.
                </div>
            </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        During a training exercise focused on locating several targeted WiFi MAC address' and SSID's via wardriving,
                        we needed a real-time alerting system that would instantly plot the device’s location on ATAK Map upon detection.
                        Since we were already using ATAK to track the movement of elements,
                        integrating this capability allowed for faster and more efficient situational awareness across the entire team.
                    </div>
                    <br/>
                    <div>
                        Previously, the process was cumbersome—operators had to manually access the Kismet UI, copy and paste latitude/longitude coordinates,
                        or wait for Kismet to generate a .kismet file, convert it to a .kml, and then import it into mapping software like ATAK or Google Maps/Earth.
                        The Kismet ATAK Companion plugin streamlined this workflow, significantly improving efficiency and ease of use for WiFi survey operations in the field.
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <div>
                        With Kismet already installed on the host machine, you can easily clone the KismetAtakCompanion Repo and run "make install" where the kismet plugin will get moved
                        to the appropriate directory within the Kismet application.
                        <ul>
                            <li>
                                A directory of the name "atakCompanion" is created in kismets plugin folder (~/.kismet/plugins).
                                2 services are run (~/.config/systemd/user/), one service that starts a python script on boot to monitor if Kismet on the host machine is running,
                                and another service that gets triggered from the python script to start the Kismet ATAK Companion HTTPSimpleServer backend (localhost:8000).
                                HTTPSimpleServer was used mostly because a minimal API was needed and i didnt want additional python packages to have to be installed that didnt come
                                default with raspbian OS (sorry flask).
                            </li>
                            <br/>
                            <li>
                                On the Kismet Web UI when the plugin is loaded, there should be a configuration dropdown at the bottom labeled "ATAK Companion", this is where the user can configure
                                a multitude of options as to what and how they want kismet devices to be forwarded to ATAK.
                            </li>
                            <br/>
                            <li>
                                For getting device data to send to ATAK you can utilize a wifi interface on the Raspberry Pi to host its own AP and WiFi an ATAK device to it to receive CoT data.
                                You can also configure in the network settings to have it send over a USB tethered connection to the phone, the only issues I have ever ran into with that is getting the IP Address of the Pi.
                                If your phone allows it you can also use a USBC ethernet adapter and connect the RPi that way. Most commonly I have used it in conjunction with a SixFab LTE Hat
                                connected to OpenVPN and had kismet data sent to ATAK that way.
                            </li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Capabilities"}>
                    <div>
                        Going through some of the options of configration:
                        <ul>
                            <li>
                                You can upload TAK client certs for device data to be sent to your TAK Server, requires Client .pem, .key and password (default: "atakatak") along with the CA .pem cert.
                            </li>
                            <br/>
                            <li>
                                You can choose two options for multicasting, one to send to the broadcast address (239.2.3.1:6969) or whether to a specific client (IP Address specified).
                                Broadcasting works best with LANs, ZeroTier and OpenVPN. TCP ("Send To") works with WireGuard VPNs where UDP multicast isnt supported by default.
                            </li>
                            <br/>
                            <li>
                                "Kismet Alerts config" are configured from Kismets settings (outside the plugin). "Kismet targets config" are only associated with the plugin and provide a way to easily add
                                MAC Addresses or SSIDs.
                            </li>
                            <br/>
                            <li>
                                TAK Tracker allows for your kismet device to populate as its own CoT icon to help aid in blueforce tracking if necessary or left running unattended.
                            </li>
                            <br/>
                            <li>
                                Kismet KML Config allow you to choose a previous .kismet file in a chosen directory to be served on the kismet ATAK Companion server by selecting the file and going to
                                http://localhost:8000/kismetdb.kml. The .kismet file is automated to convert as a .kml and be served at this endpoint
                                (if its empty its because theres no scanned devices with GPS location attached).
                                you can also use the network KML link that shows active scanned devices from your current running scan by going to http://localhost:8000/networklink.kml
                                and importing it into ATAK as a network link or http url (updates every minute).
                            </li>
                            <br/>
                            <li>
                                Kismet CoT Stream sends all scanned devices from kismet to forward to ATAK. The markers can get overwhelming so every market has a tag (#kismet) attached to it
                                for you to be able to easily toggle the markers on and off to appear on the map in ATAK app settings.
                            </li>
                        </ul>
                    </div>
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