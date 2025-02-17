import React from "react";
import "../CSS/ProjexBlogEntry.css"
import "../CSS/Global.css"

function ProjexBlogEntry({title, date, children}) {
    return (
        <div className={"projexblogentry-container"}>
            <div className={"projexblogentry-title-container"}>

                <div className={"projexblogentry-title"}>
                    {date ? `[${date}] - ${title}` : title }
                </div>

            </div>

            <div className={"projexblogentry-content-container"}>
                <div className={"projexblogentry-content"}>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default ProjexBlogEntry;