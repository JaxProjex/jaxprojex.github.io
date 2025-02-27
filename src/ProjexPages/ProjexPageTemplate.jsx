import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogEntry from "../ProjexComponents/ProjexBlogEntry";

function ProjexPageTemplate({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <ProjexBlogEntry title={"What is it?"}>
                    <div>

                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Why build it?"}>
                    <div>

                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"How does it work?"}>
                    <div>

                    </div>
                </ProjexBlogEntry>
                <ProjexBlogEntry title={"Capabilities"}>
                    <div>

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

                    </div>
                    <div>
                        another tin to note
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"Hardware"} date={"12feb2020"}>
                    <div>

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
                       body3={returnBody2Html()}
    />
}

export default ProjexPageTemplate;