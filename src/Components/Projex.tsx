import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Projex.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import ProjexDrop from "../Components/ProjexDrop";
import ProjexData from "../Data/ProjexData";
import KismetAtakCompanion from "../Data/ProjexComponents/KismetAtakCompanion";
import SkyviewRpi from "../Data/ProjexComponents/SkyviewRpi";

function Projex() {
    const revealClose = 0

    const [revealOpen, setRevealOpen] = useState(revealClose);

    function handleRevealOpen(id:number) {
        setRevealOpen(id)
        console.log("open reveal");
    }

    function handleRevealClose() {
        setRevealOpen(revealClose)
        console.log("close reveal")
    }

    function returnProjexBlog() {
        const i = revealOpen-1;
        switch (revealOpen) {
            case 1:
                return <SkyviewRpi handleClose={handleRevealClose} index={i}/>
            case 2:
                return <KismetAtakCompanion index={i}/>
            default:
                return <>"error"</>
        }
    }

    useEffect(() =>
    {
        returnProjexBlog()
    },[revealOpen]);

    return (
        <div className={"projex-wrapper"}>
            <Header title={"projex"}/>
            <TopNav title={"projex"}/>
            <div className={"projex"}>
                {revealOpen === 0 ?
                <div className={"projex-grid-container"}>
                    {ProjexData.map((pd) => (
                        <div key={pd.id} onClick={() => handleRevealOpen(pd.id)}>
                            <ProjexDrop project={pd.title}/>
                        </div>
                        ))}
                </div>
                :
                <div className={"projex-display-container"}>
                    {returnProjexBlog()}
                </div>
                }
            </div>
            <Footer/>
        </div>
    )
}
export default Projex;