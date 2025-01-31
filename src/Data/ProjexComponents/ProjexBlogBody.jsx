import React from "react";
import "../../CSS/ProjexBlogBody.css"

function ProjexBlogBody({content}) {
    return (
        <div className={"projexblogbody-container"}>
            <div className={"projexblogbody-subcontainer"}>
                <div className={"projexblogbody-content-container"}>
                    <div className={"projexblogbody-content"}>
                        {content}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjexBlogBody;