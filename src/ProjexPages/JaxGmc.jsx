import React from "react";
import ProjexBlog from "../ProjexComponents/ProjexBlog";
import {ProjexData} from "../Data/ProjexData";
import "../CSS/ProjexBlog.css"
import ProjexBlogBody from "../ProjexComponents/ProjexBlogBody";

function JaxGmc({index, handleClose}) {

    const pd = ProjexData[index]

    function returnBody1Html() {
        return (
            <>
                <p>
                    someting skfs dgsflaorf gtsflksaed dtyhdyrgf dcrs th tuf bv dsrcs dty yv t v
                </p>

                <p>
                    111111several of the years going to open
                    for the times of that have come from over the tirteen going for m
                    maybe often time yup to do those things
                </p>

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
                       body2={returnBody1Html()}
                       body3={returnBody1Html()}
                       body4={returnBody1Html()}
    />
}

export default JaxGmc;