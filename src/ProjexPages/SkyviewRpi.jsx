import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogBody from "../ProjexComponents/ProjexBlogBody";
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";

function SkyviewRpi({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogEntry title={"What is it?"}>
                    <div>
                        <ul>
                            <li>Raspberry Pi that forwards UAS presence notifications from a Skyview UAS detection system to all ATAK devices over a tactical mesh network, enabling real-time alerts for improved situational awareness.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"What does it do?"}>
                    <ul>
                        <li>Connects a Raspberry Pi Zero W to the Skyview system and PRC-163 mesh network.</li>
                        <li>Subscribes to the Skyview’s MQTT topics and processes UAS detection data.</li>
                        <li>Broadcasts drone detections as CoT (Cursor on Target) messages to ATAK devices.</li>
                        <li>Sends real-time location markers of detected UAS, home site, and controllers on ATAK.</li>
                        <li>Notifies ATAK users via GeoChat when an enemy UAS is detected.</li>
                    </ul>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        <ul>
                            <li>The existing Skyview UAS detection method for field operation relied on a USB light indicator and wired earphones (audio transmission of UAS detection data), limiting awareness and response time.</li>
                            <li>Operators had to manually relay UAS detections, causing delays in counter-UAS actions.</li>
                            <li>This system enables instant notifications to all personnel connected to the network (PRC-163 mesh or WiFi AP), improving situational awareness and response time to better counter UAS threats.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"How does it work?"}>
                    <div>
                        <ul>
                            <li>Raspberry Pi Zero W powered by USB port from the Skyview, connected via ethernet (eth0) to the Skyview systems ethernet port.</li>
                            <li>The Raspberry Pi creates two WiFi APs for ATAK devices: “skyview-rpi-standalone” (wlan0): Standalone WLAN for direct connections. “skyview-rpi-tether” (wlan1): Bridges to PRC-163 mesh network (eth1).</li>
                            <li>The Raspberry Pi subscribes to Skyview’s MQTT broker over WebSocket and processes UAS detection data using Node-Red.</li>
                            <li>Detection events trigger multicast CoT messages on both WiFi networks and the PRC-163 TSM network.</li>
                            <li>Two types of messages are sent to ATAK: Spot Markers for drones, home sites, and controllers with valid coordinates. GeoChat Messages to alert ATAK users about detected UAS activity.</li>
                            <li>Devices on wlan0 receive data via multicast 239.5.5.55:7171, while those on br0 (TSM network) receive it via 239.2.3.1:6969.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How to improve it?"}>
                    <ul>
                        <li>Convert system to instead utilize cheap travel routers (custom firmware flashed GLiNet router?) and Python Flask instead of RPi boards and Node-Red.</li>
                        <li>Optimize networking solution to not require to separate WiFi APs.</li>
                        <li>Offer easier USB tethering setup as WiFi connection can become unreliable if jamming certain UAS frequencies.</li>
                        <li>Provide support for dual band WiFi to allow clients to switch bands in the event one is being jammed.</li>
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
                            <li>OS: Linux, (DietPi ARMv6 Bookworm)</li>
                            <li>Eth0: 192.168.1.69/24 (static)</li>
                            <li>Eth1: manual (PRC-163/uplink network)</li>
                            <li>Wlan1: manual (skyview-rpi-tether)</li>
                            <li>Wlan0: dhcp-server 192.168.42.1/24 (skyview-rpi-standalone)</li>
                            <li>Br0: dhcp-client (bridge Eth1 to Wlan1 AP clients)</li>
                            <li>NodeRed, w/ node-red-contrib-tak (http://localhost:1880)</li>
                            <li>WiFi TX power lowered to 1 dbm (wlan0 and wlan1)</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"Hardware"}>
                    <div>
                        <ul>
                            <li>$1 soap container with holes drilled (use as case if your 3d printing skills are subpar like mine)</li>
                            <li>Raspberry Pi Zero W</li>
                            <li>Waveshare Ethernet/USB HAT</li>
                            <li>16GB SD Card (or greater)</li>
                            <li>RJ45 Ethernet cable</li>
                            <li>USB WiFi Dongle (RT5370/Ralink5370 Chipset worked)</li>
                            <li>USB-A male to USB-C female adapter (connection point for PRC-163 USB-C cable)</li>
                            <li>USB extender (USB-A / USB-C adapter attached at end)</li>
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

export default SkyviewRpi;