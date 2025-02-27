import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/ProjexDrop.css';
import '../CSS/Global.css';

function ProjexDrop(props:any) {
            return (
                <div className={"projex-drop-container"}>
                    <div className={"projex-drop-text"}>{props.project}</div>
                    <div className={"projex-drop-desc-container"}>
                        <div className={"projex-drop-desc"}>{props.description}</div>
                    </div>
                    {/*props.projectImg ?
                    <div className={"projex-drop-img-container"}>
                        <img className={"projex-drop-img"} src={"images/" + props.projectImg} alt={"project img"}/>
                    </div>
                        : <></>*/}
                </div>
            )
}

export default ProjexDrop;