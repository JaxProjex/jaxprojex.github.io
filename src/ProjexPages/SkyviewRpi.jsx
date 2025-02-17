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
                        A solution to forward UAS detections to all ATAK devices on the mesh network
                        to be alerted of enemy UAS present and allow for plotting location of enemy UAS on ATAK map.
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        The current way of operating the Skyview UAS detection system was to utilize a USB light that plugs in the top of the skyview that changes colors to notify when enemy UAS is detected.
                        Additionally the Skyview operator had to carry wired earphones to listen to the MGRS coordinates of the UAS system
                        when enemy UAS was present. This provided a slow reaction time and lack of situational awareness to those that often had the tools
                        to counter enemy UAS. With the configured raspberry pi configured and implemented with the Skyview, it provided immediate location feedback to everyone carrying a PRC-163 radio that had their ATAK device connected to the network to allow key leaders to be notified
                        of enemy UAS so they can posture their force faster to counter the UAS threat.
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"How does it work?"}>
                    <div>
                        The project itself is just a Raspberry Pi Zero W with an ethernet and USB hat
                        attached to allow for connections to mesh radios and the Skyview system itself.
                        <ul>
                            <li>
                        The Raspberry Pi Zero W is powered from the Skyviews USB port, and connected to the Skyview via Ethernet (eth0).
                        The Raspberry Pi Zero W Creates 2 WiFi Access Points for ATAK client devices to connect to:
                        “skyview-rpi-standalone” WiFi (wlan0) is a standalone network that runs DHCP server on 192.168.42.0/24 IP scheme,
                        the skyview webpage can be accessed from this LAN. “skyview-rpi-tether” WiFi (wlan1) is a network that is bridge (br0) to the USB-C tether (eth1) from the PRC-163, and gets its DHCP IP leasing from the connected PRC-163 Radio.
                        If no radio and network is connected then connecting to “skyview-rpi-tether” WiFi will result in a “couldn’t obtain IP address” error.
                            </li>
                            <br/>
                            <li>
                        IPv4 forwarding is enabled and a static IP route is added on the Raspberry Pi for access to the Skyview Webpage (http://192.168.1.217).
                            </li>
                            <br/>
                            <li>
                        The Skyview is an MQTT Broker Server with multiple topics that it publishes UAS detection data to. The Raspberry Pi Zero W subscribes to several of these MQTT Topics over its WebSocket connection.
                        Upon the Skyview Detecting UAS, the Raspberry Pi Zero W receives a JSON payload over the MQTT “detections” topic from the Skyview.
                        The information received is then parsed (CoT XML) through the Raspberry Pi Zero W's Node-Red server and multicasted out on wlan0 ("skyview-rpi-standalone" wifi) and br0 (PRC-163 TSM network) interfaces.
                            </li>
                            <br/>
                            <li>
                        2 Message types get multicasted out as CoT XML to ATAK devices: #1 a Spot Marker of the drone, home site, and controller upon receiving valid coordinates. #2 an ATAK GeoChat message notifying the user that a Drone is detected.
                        The Raspberry Pi Zero W will plot location markers as fast as the Skyview can detect them. Not any slower, not any faster.
                            </li>
                            <br/>
                            <li>
                        ”skyview-rpi-standalone” (wlan0) clients will receive UAS detections via multicast 239.5.5.55:7171. “skyview-rpi-tether” and other ATAK clients on the PRC-163 TSM network (br0) will receive UAS detections via multicast 239.2.3.1:6969.
                            </li>
                        </ul>
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"Capabilities"}>
                    <div>
                        <ul>
                            <li>
                                Allows UAS detections to be broadcasted over TSM to all ATAK devices connected on same network.
                            </li>
                            <br/>
                            <li>
                                Allows UAS detections to be immediately plotted on ATAK upon receiving valid coordinates of the Drone, Home Site, and/or Controller.
                                Note, not all UAS detection types broadcast location data for skyview to intercept.
                            </li>
                            <br/>
                            <li>
                                Allows for notifications of UAS detections from Skyview to be received on ATAK as a GeoChat message in “All Chat Rooms”
                                (Enabling ATAK notifications can help assist the user in identifying immediately when UAS is detected).
                            </li>
                            <br/>
                            <li>
                                Allows for multiple client devices (phones/computers/tablets) to be connected to the skyview simultaneously.
                            </li>
                            <br/>
                            <li>
                                Skyview webpage can still be accessed using the same default skyview IP Address (http://192.168.1.217)
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