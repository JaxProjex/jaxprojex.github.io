import React from "react";
import {useNavigate} from "react-router-dom";
import '../CSS/Xtra.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";

function Xtra() {
    return (
        <div className={"xtra-wrapper"}>
            <Header title={"xtra"}/>
            <TopNav title={"xtra"}/>
            <div className={"xtra"}>
            </div>
            <Footer/>
        </div>
    )
}
export default Xtra;