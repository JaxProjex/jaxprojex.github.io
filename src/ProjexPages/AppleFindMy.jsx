import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";

function AppleFindMy({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogEntry title={"What is it?"}>
                    <div>
                        <ul>
                            <li>Solution to forward Apple FindMy network devices (iPhones, Macbooks, iPads, Airtags) to a Traccar Server for consolidated tracking.</li>
                        </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"What does it do?"}>
                    <ul>
                        <li>Collects Apple FindMy devices location data.</li>
                        <li>Converts it into a format compatible with Traccar to ingest.</li>
                        <li>Sends updates to a self-hosted Traccar server.</li>
                    </ul>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                    <ul>
                        <li>Personal experience being a victim of theft motivated the need for better tracking of Airtags.</li>
                        <li>Wanted a unified map for Life360, Tile, and Apple FindMy devices.</li>
                        <li>Leveraged a method to extract Apple FindMy data from macOS Ventura.</li>
                        <li>Repurposed an outdated MacBook Air to run the forwarding script.</li>
                    </ul>
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <ul>
                        <li>Requires a MacBook running macOS Ventura or older.</li>
                        <li>Reads location data from FindMy cache files (Devices.data & Items.data).</li>
                        <li>Grants Terminal access to read FindMy cache files.</li>
                        <li>Prevents the MacBook from sleeping while python script is running.</li>
                        <li>Extracts and updates device locations in Traccar via HTTP requests.</li>
                        <li>Differentiates between "user seen" and "crowdsourced" location updates.</li>
                    </ul>

                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How to improve it?"}>
                    <ul>
                        <li>code cleanup.</li>
                        <li>Open FindMy app by default when script run.</li>
                    </ul>
                </ProjexBlogEntry>
            </>
        )
    }

    function returnBody2Html() {
        return (
            <>
                <ProjexBlogEntry title={"Software"}>
                    <ul>
                        <li>Mac OS Ventura</li>
                        <li>Traccar Server</li>
                        <li>Apple FindMy Application</li>
                        <li>Python3</li>
                        <li>Terminal (with file permissions)</li>
                    </ul>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"Hardware"}>
                    <ul>
                        <li>MacBook</li>
                        <li>Apple Devices/Items</li>
                    </ul>
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

export default AppleFindMy;