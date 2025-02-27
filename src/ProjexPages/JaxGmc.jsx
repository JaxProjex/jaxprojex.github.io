import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogBody from "../ProjexComponents/ProjexBlogBody";
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";

function JaxGmc({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogEntry title={"What is it?"}>
                    <div>
                        <ul>
                            <li>A Raspberry Pi Zero 2W-based vehicle security system.</li>
                            <li>Uses multiple peripherals and communication methods to detect unauthorized access and track the vehicle.</li>
                            <li>Integrates a USB HAT to connect a USB camera, GPS module, and Sixfab LTE cellular modem.</li>
                            <li>An Arduino Nano manages power states and battery control through relays.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"What does it do?"}>
                    <ul>
                        <li>Detects unauthorized access and sends theft alerts.</li>
                        <li>Provides real-time GPS tracking and remote monitoring.</li>
                        <li>Uses Bluetooth and/or RFID authentication for vehicle access.</li>
                        <li>Maintains power to the security system if the vehicle is in “stolen” mode.</li>
                        <li>Sends notifications via SMS, phone calls, NTFY and/or ATAK.</li>
                    </ul>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        <ul>
                            <li>Truck was repeatedly broken into and eventually stolen (recovered hours later because of BLE trackers), requiring a more responsive security system.</li>
                            <li>Commercial solutions are costly, non discrete, lack customization, and rely on third-party servers.</li>
                            <li>Provides a self-hosted, low-cost, and customizable alternative with full control over security.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <ul>
                        <li>Power:</li>
                        <ul>
                            <li>Arduino Nano controls relays to power the Raspberry Pi based on vehicle ignition status.</li>
                            <li>In stolen mode, the system remains powered until authentication is confirmed.</li>
                        </ul>
                        <br/>

                        <li>Authentication:</li>
                        <ul>
                            <li>Bluetooth Pairing, checks for a pre-paired phone.</li>
                            <li>RFID Tag Scan, requires scanning a registered RFID sticker tag inside the vehicle.</li>
                        </ul>
                        <br/>

                        <li>Alerts:</li>
                        <ul>
                            <li>If unauthorized access is detected: SMS warning is sent to the owner.</li>
                            <li>If not authenticated within a grace period: A second SMS alert is sent. The system calls the owner’s phone as an immediate theft notification.</li>
                            <li>The vehicle enters “stolen” mode, keeping the Raspberry Pi powered even when the vehicle is off.</li>
                            <li>Notifications are periodically sent to remind owner Raspberry Pi is still drawing power and in "stolen" mode.</li>
                        </ul>
                        <br/>

                        <li>Tracking:</li>
                        <ul>
                            <li>Uses USB GPS for quick location acquisition and accurate tracking (modems GPS took too long on power start to get an accurate location fix).</li>
                            <li>Sends location data to a self-hosted Traccar server.</li>
                            <li>Maintains remote access via a Flask Web App hosted on the Raspberry Pi.</li>
                            <li>Sends additional location information via ATAK and/or pinned google maps locations via SMS (if enabled).</li>
                        </ul>
                        <br/>

                        <li>WiFi:</li>
                        <ul>
                            <li>Can create a local WiFi hotspot for troubleshooting and manual control.</li>
                            <li>Can connect to a WiFi network for data transmission.</li>
                        </ul>
                        <br/>

                        <li>Additional:</li>
                        <ul>
                            <li>Uses RPiTX library to transmit a recorded key fob alarm signal for remote alarm activation (not effective on newer cars with rolling codes.. effective on a 2005 GMC truck).</li>
                            <li>USB camera snapshots photos every 5 seconds instead of live streams video to optimize CPU, memory, storage, bandwidth, and power consumption while still providing situational awareness.</li>
                        </ul>
                    </ul>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How to improve it?"}>
                    <div>
                        <ul>
                            <li>Implement vehicle diagnostics integration for real-time status monitoring (CAN system / OBD2 to USB adapter)</li>
                            <li>Add RTC module if logging any information requiring accurate time fixes (opposed to waiting for time sync with valid GPS fix).</li>
                            <li>Switch to publishing minimal data to MQTT broker and have other server handle major functions?</li>
                            <li>Keypad authentication method added?</li>
                            <li>Easier flow for adding authorized BLE paired devices and RFID tags.</li>
                            <li>Utilize websocket connection instead of REST API.</li>
                            <li>Install nexmon package to have option to wardrive using kismet with onboard wifi interface.</li>
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
                            <li>
                                Linux: Raspbian OS (Bookworm)
                            </li>
                            <li>
                                Python RPiTX library (used for replaying recorded keyfob codes)
                            </li>
                            <li>
                                OpenCV, GStreamer, ffmpeg libraries (to allow USB video streaming/recording)
                            </li>
                            <li>
                                Python Flask library (used to run web app)
                            </li>
                            <li>
                                GPSD libraries (to allow getting location data from USB GPS or modems GPS)
                            </li>
                            <li>
                                mfrc522 and spidev libraries (to connect RFID reader to RPi)
                            </li>
                            <li>
                                bluez-tools library (to allow bluetooth presence detection)
                            </li>
                            <li>
                                Python serial library (communicate to arduino over serial)
                            </li>
                            <li>
                                minicom (for AT Commands to cell modem)
                            </li>
                            <li>
                                VPN *recommended (i use/host OpenVPN)
                            </li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Hardware"}>
                    <div>
                        <ul>
                            <li>
                                Raspberry Pi Zero 2W
                            </li>
                            <li>
                                4-port USB hat
                            </li>
                            <li>
                                RFC522 RFID Reader
                            </li>
                            <li>
                                3.3v 5v logic level converter (to connect arduino nano to rpi zero)
                            </li>
                            <li>
                                SixFab 4G/LTE Cellular Modem
                            </li>
                            <li>
                                USB GPS
                            </li>
                            <li>
                                USB Camera
                            </li>
                            <li>
                                Arduino Nano
                            </li>
                            <li>
                                SIM Card
                            </li>
                            <li>
                                4-channel 5v Relay board
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

export default JaxGmc;