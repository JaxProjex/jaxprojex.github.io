import React from "react";
import ProjexBlog from "./ProjexBlog";
import ProjexData from "../ProjexData";

function SkyviewRpi({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBodyHtml() {
        return (
            <div>
                hello from main body divs
            </div>
        )
    }

    return (
        <div>
            <ProjexBlog handleClose={handleClose} title={pd.title} description={pd.description} body={returnBodyHtml()}/>
        </div>
    )

}

export default SkyviewRpi;