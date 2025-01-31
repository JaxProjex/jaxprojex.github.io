import React from "react";
import ProjexBlog from "./ProjexBlog";
import ProjexData from "../ProjexData";
import "../../CSS/ProjexBlog.css"
import ProjexBlogBody from "./ProjexBlogBody";

function SkyviewRpi({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBodyHtml() {
        return (
            <>
                <div className={"projexblog-body-subtitle"}>
                    Overview
                </div>
                <div className={"projexblog-body-text"}>
                    hello text of body
                </div>

                <div className={"projexblog-body-subtitle"}>
                    Components, Materials, Setup
                </div>
                <div className={"projexblog-body-text"}>
                    hello text of body
                </div>

                <div className={"projexblog-body-subtitle"}>
                    Usage
                </div>
                <div className={"projexblog-body-text"}>
                    hello text of body
                </div>

                <div className={"projexblog-body-subtitle"}>
                    Results & Learnings
                </div>
                <div className={"projexblog-body-text"}>
                    hello text of body
                </div>
            </>
        )
    }

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogBody title={"new beginnings"} content={"ofsodm sds fgsfdgdfsg fdgsfd gdsfg sdfg dsfg"}/>
                <ProjexBlogBody title={"original proj..."} content={"ldksldksldk sdfklsdf sdfklsdf dflksdflksdf sdfsdf gsd gsdfg dfg dfsg dsfg dsfg dsfg dsfg sdfg sdfg dsfg dsfg sdfg sdfg sdfg dsfg sdfg dsfg sdfg dfsg dsfg dsfg dfsg dfsg dfsg dsfg dsfg dsfg"}/>
            </>
        )
    }

    return (
        <>
            <ProjexBlog handleClose={handleClose} title={pd.title} description={pd.description}
                        link={pd.link} tags={pd.tags} body1={returnBody1Html()} body2={returnBody1Html()} body3={returnBody1Html()} body4={returnBody1Html()}/>
        </>
    )

}

export default SkyviewRpi;