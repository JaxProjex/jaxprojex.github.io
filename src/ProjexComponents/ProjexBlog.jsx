import React from "react";
import "../CSS/ProjexBlog.css"
import QaDrop from "../Components/QaDrop";
import ProjexBlogDrop from "./ProjexBlogDrop";
import ProjexBlogImages from "./ProjexBlogImages";

function ProjexBlog({handleClose,
                        title,
                        images,
                        tags,
                        description,
                        link,
                        body1,
                        body2,
                        body3,
                        body4}) {

    const bodyTitle1 = "Overview";
    const bodyTitle2 = "Components, Materials, Setup";
    const bodyTitle3 = "Capabilities & Usage";
    const bodyTitle4 = "Results";


    return (
        <div className={"projexblog-container"}>

            <div className={"projexblog-x-container"}>
                    <div className={"projexblog-x-container-1"}>
                        <div className={"projexblog-x-icon"} onClick={handleClose}>
                            X
                        </div>
                    </div>
                </div>

                <div className={"projexblog-container-1"}>

                    <div className={"projexblog-title-container"}>
                        <div className={"projexblog-title-container-1"}>
                            {/*<div className={"projexblog-title-nav"}>
                            &lt;
                        </div>*/}
                            <div onClick={() => {
                                window.open(link)
                            }} className={"projexblog-title"}>
                                {title}
                            </div>
                            {/*<div className={"projexblog-title-nav"}>
                            &gt;
                        </div>*/}
                        </div>
                    </div>
                    {/*link &&
                <div className={"projexblog-link-container"}>
                    <a className={"projexblog-link"} href={link}>[ {link} ]</a>
                </div>
                */}
                    <div className={"projexblog-description-container"}>
                        <div className={"projexblog-description"}>
                            {description}
                        </div>
                    </div>

                    <div className={"projexblog-images-container"}>
                        <ProjexBlogImages images={images}/>
                    </div>

                    <div className={"projexblog-container-2"}>

                        <div className={"projexblog-body-container"}>
                            <div className={"projexblog-body-container-1"}>
                                <ProjexBlogDrop title={bodyTitle1} content={body1}/>
                                <ProjexBlogDrop title={bodyTitle2} content={body2}/>
                                <ProjexBlogDrop title={bodyTitle3} content={body3}/>
                                <ProjexBlogDrop title={bodyTitle4} content={body4}/>
                            </div>
                        </div>
                    </div>

                    <div className={"projexblog-tags-container"}>
                        <div className={"projexblog-tags"}>
                            {tags}
                        </div>
                    </div>
                </div>
            </div>
            )

            }

            export default ProjexBlog;