import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";

function NrfIot({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogEntry title={"What is it?"}>
                    <div>
                        <ul>
                            <li>A sensor-based security system using NRF24 transceiver modules (2.4GHz) for wireless communication.</li>
                            <li>Can send ATAK GeoChat notifications to ATAK devices connected to a NodeMCU WiFi AP.</li>
                            <li>Can send sensor data over MQTT to a broker if the NodeMCU connects to an existing WiFi network.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"What does it do?"}>
                    <ul>
                        <li>Detects movement or activity using various sensor types (PIR, reed switch, ultrasonic, gyro, etc.).</li>
                        <li>Relays sensor activations to a bridge node, which then: Multicasts an ATAK GeoChat notification over its WiFi AP. Forwards the notification to an MQTT broker if connected to an external WiFi network.</li>
                        <li>Supports integration with TAKServer, NTFY, or Home Assistant via a custom Node-Red flow.</li>
                    </ul>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                        <ul>
                            <li>Government-issued security sensor systems are expensive and not always recoverable in tactical or urban hide sites.</li>
                            <li>Using cheap commercial electronics makes the system expendable in case of battlefield loss.</li>
                            <li>Enables early warning detection while integrating into existing ATAK-based workflows.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"How does it work?"}>
                    <div>
                        <ul>
                            <li>Sensor Nodes: Triggered by environmental changes (motion, door openings, vibration, etc.), they send alerts via NRF24 to the bridge node.</li>
                            <li>Bridge Node (NodeMCU): Standalone Mode: Creates a WiFi AP, multicasts alerts as ATAK GeoChat messages. Connected Mode: Forwards alerts to an MQTT broker, allowing integration with external services.</li>
                            <li>A Node-Red flow can process MQTT messages and forward them to TAKServer, NTFY, or Home Assistant for further automation.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How to improve it?"}>
                    <ul>
                        <li>More robust bridge node with webapp configuration: raspberry pi zero W?</li>
                        <li>Custom printed PCB for easier/faster creation of sensor nodes.</li>
                        <li>Actual 3D printed cases.</li>
                        <li>Replace NRF24 RF module with LoRa RF modules.</li>
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
                            <li>Arduino IDE</li>
                            <li>MQTT Broker</li>
                            <li>ATAK App</li>
                            <li>Notification Service: NTFY, Home Assistant, etc.</li>
                            <li>Node-Red (optional)</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Hardware"}>
                    <div>
                        <ul>
                            <li>Arduino Nano (or similar)</li>
                            <li>NodeMCU/ESP8266/ESP32 (or similar)</li>
                            <li>NRF24L01 Transceiver Module</li>
                            <li>3.7V Lithium Rechargeable Battery (I used 3000mAh)</li>
                            <li>2-Position switch (on/off)</li>
                            <li>Magnetic Reed Switch (N/O, N/C)</li>
                            <li>Other peripherals of choice: PIR, relays, ultrasonic, etc.</li>
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

export default NrfIot;