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
                    A solution to have devices (phones, computers, tablets) and items (airtags) in Apple FindMy network forwarded to a Traccar Server for
                    consolidated blueforce tracking.
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>
                    I've been a victim of having items stolen from me (to include my car) so I often utilize Bluetooth Tile
                    and Apple Airtag devices inside of bags, cars and other personal belongings.
                    However, between Life360, The Tile App, and the Apple FindMy app all having their own map to view their devices I wanted the ability to consolidate
                    all devices into one visual map, hence a self hosted traccar server was created.
                    </div>
                    <br/>
                    <div>
                    I had a Traccar server for quite some time, but one day came across
                    a github project that converted all Apple FindMy device and item data into a spreadsheet just by accessing the file that stores data of your Apple FindMy network
                    on your MacBook. However, it required one with Ventura or earlier (Ventura stored data on "items" (airtags) while Catalina only supported "devices" (phones, tablets, computers).
                    Fortunately i had an old MacBook Air (my first personal laptop) that was in desperate need of repurposing.
                    I factory reset my computer to free up some space (frustratingly low internal storage space) and upgraded from Catalina to Ventura.
                    A few lines of python and some time registering the devices in my traccar server and I finally had a use for my old MacBook Air! An Apple FindMy Traccar Forwarder server!
                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <ul>
                        <li>
                            Requires a MacBook with Ventura or older. Ventura is the last Mac OS version that stopped encrypting the files that store Apple FindMy device and item data and it supports "items" (airtags) opposed to older versions.
                            These Files can be found in ~/Library/Caches/com.apple.findmy.fmipcore/Devices.data for data on apple phones, tablets, computers, etc..
                            And.. ~/Library/Caches/com.apple.findmy.fmipcore/Items.data for apple airtags. It's required to grant file access permissions to Terminal! The Files just contain large JSON data sets that change every so often,
                            keeping the Apple FindMy Application running makes the data in these files update!
                        </li>
                        <br/>
                        <li>
                            Inside of the python script it disables the MacBook from going to sleep so the laptop can stay closed (sudo pmset disablesleep1).
                            When the script is stopped (Ctr^C) it turns sleep back on (sudo pmset disablesleep 0)
                        </li>
                        <br/>
                        <li>
                            At the top of the python script it requires you to put in your user for the computer and the Traccar server IP Address. Do not include the port as it sends it over 5055 by default.
                            The Python script populate with the names of the devices it sees and you can register these device names in your traccar server as client tracking devices.
                        </li>
                        <br/>
                        <li>
                            All devices and items have 2 locations and timestamps. One thats from your device seeing other devices on your FindMy network. And one thats "CrowdSourced" that is discovered by other people with apple devices.
                            the last timestamps are kept and referenced to see if theres an updated change in location which will then trigger to update your traccar server.
                        </li>
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