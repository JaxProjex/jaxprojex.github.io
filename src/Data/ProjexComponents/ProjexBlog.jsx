import React from "react";
import "../../CSS/ProjexBlog.css"
import QaDrop from "../../Components/QaDrop";
import ProjexBlogDrop from "./ProjexBlogDrop";

function ProjexBlog({handleClose,title,description,body}) {

    return (
        <div className={"projexblog-container"}>

            <div className={"projexblog-x-container"}>
                <div className={"projexblog-x-icon"} onClick={handleClose}>
                    X
                </div>
            </div>

            <div className={"projexblog-container-1"}>

                <div className={"projexblog-title-container"}>
                    <div className={"projexblog-title"}>
                        {title}
                    </div>
                </div>
                <div className={"projexblog-description-container"}>
                    <div className={"projexblog-description"}>
                        {description}
                    </div>
                </div>

                <div className={"projexblog-container-2"}>

                    <div className={"projexblog-body-container"}>
                        <ProjexBlogDrop title={"Overview"} content={"djfhsdkjfhsdkjfhsd"}/>
                        <ProjexBlogDrop title={"Usage"} content={"djfhsdkjfhsdkjfhsd"}/>
                        <ProjexBlogDrop title={"Hardware/Software Used"} content={"djfhsdkjfhsdkjfhsd"}/>
                        <ProjexBlogDrop title={"Creation Process"} content={"djfhsdkjfhsdkjfhsd"}/>
                        <ProjexBlogDrop title={"Lessons Learned & Improvements"} content={"djfhsdkjfhsdkjfhsd"}/>

                    </div>

                </div>

            </div>
        </div>
    )

}

export default ProjexBlog;