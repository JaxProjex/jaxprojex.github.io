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
                <ProjexBlogEntry title={"capabilities"}>
                    something cool always djfeg dg gsgdtg grg g tg tg
                    gtge gttgt gtg tgdtgtgr ewrfr ferg getget gteg
                    tg etgetg etgetgtgt getgetg tgetg etg tgtgtg tgseget getg
                </ProjexBlogEntry>
            </>
        )
    }

    function returnBody3Html() {
        return (
            <>
                <ProjexBlogEntry title={"what am i going to do?"} date={"12feb2020"}>
                    <div>
                        something cool is going down dlfsdfsdf fdfsd
                        dfjdfsdjfksdf
                        dfksdjfsdf
                    </div>
                    <div>
                        another tin to note
                    </div>
                </ProjexBlogEntry>

                <ProjexBlogEntry title={"what am i going to do?"} date={"12feb2020"}>
                    <div>
                        something cool is going down dlfsdfsdf fdfsd
                        dfjdfsdjfksdf
                        dfksdjfsdf
                    </div>
                    <div>
                        another tin to note
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
                       body2={returnBody1Html()}
                       body3={returnBody1Html()}
    />
}

export default ProjexPageTemplate;