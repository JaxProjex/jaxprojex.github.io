import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../CSS/ProjexBlogDrop.css"

function ProjexDrop({title, content}) {

    const [revealDrop, setReveal] = useState(title === "Overview");

    function handleReveal() {
        if (revealDrop) {
            return (
                <div className={"projexblog-drop-container"}>
                    <div className={"projexblog-drop-container-top"}>
                        <div className={"projexblog-drop-title"}>
                            {title}
                        </div>
                        <div className={"projexblog-drop-icon-x"} onClick={() => {
                            setReveal(false)
                        }}>
                            [ X ]
                        </div>
                    </div>
                    <div className={"projexblog-drop-content"}>
                        {content}
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"projexblog-drop-container"} onClick={() => {
                    setReveal(true)
                }}>
                    <div className={"projexblog-drop-container-top"}>
                        <div className={"projexblog-drop-title-container"}>
                            <div className={"projexblog-drop-title"}>
                                {title}
                            </div>
                        </div>
                        <div className={"projexblog-drop-icon-container"}>
                            <div className={"projexblog-drop-icon-v"} onClick={() => {
                            setReveal(true)
                            }}>
                                V
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        handleReveal()
    )
}
export default ProjexDrop;