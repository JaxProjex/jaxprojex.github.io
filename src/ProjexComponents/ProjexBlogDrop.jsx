import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../CSS/ProjexBlogDrop.css"
import "../CSS/Global.css"

function ProjexDrop({title, content}) {

    const [revealDrop, setReveal] = useState(true);

    function handleReveal() {
        if (revealDrop) {
            return (
                <div className={"projexblog-drop-container"}>
                    <div className={"projexblog-drop-container-top"}>
                        <div className={"projexblog-drop-title"}>
                            {title}
                        </div>
                        <div className={"projexblog-drop-icon-container"}>
                            <div className={"projexblog-drop-icon-x"} onClick={() => {
                                setReveal(false)
                            }}>
                                [ - ]
                            </div>
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
                                [ + ]
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