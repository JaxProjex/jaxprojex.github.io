import React from "react";
import "../CSS/ProjexBlogBody.css"
import "../CSS/Global.css"

function ProjexBlogBody({children}) {
    return (
        <div className={"projexblogbody-container"}>
            <div className={"projexblogbody-subcontainer"}>
                <div className={"projexblogbody-content-container"}>
                    <div className={"projexblogbody-content"}>
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjexBlogBody;