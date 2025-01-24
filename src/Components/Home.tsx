import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import '../CSS/Home.css';
import Header from "../Components/Header";
import TopNav from "../Components/TopNav";
import Footer from "../Components/Footer";
import HomeModal from "../Components/HomeModal";

function Home() {

    const [attr, setAttr] = useState(0) //option 0,1,2
    const [trait, setTrait] = useState(0)
    const [hobby, setHobby] = useState(0)
    const [modalAttr, setModalAttr] = useState(0)
    const [modalTrait, setModalTrait] = useState(0)
    const [modalHobby, setModalHobby] = useState(0)

    const navigate = useNavigate();

    function handleAttrArrow(num:number) {
        if (num < 0 || num > 1) {
            setAttr(0);
        } else {
            setAttr(num);
        }
    }

    function handleTraitArrow(num:number) {
        if (num < 0 || num > 1) {
            setTrait(0);
        } else {
            setTrait(num);
        }
    }

    function handleHobbyArrow(num:number) {
        if (num < 0 || num > 2) {
            setHobby(0);
        } else {
            setHobby(num);
        }
    }

    function handleModalTrait(num:number) {
        setModalTrait(num)
    }

    function handleModalAttr(num:number) {
        setModalAttr(num)
    }

    function handleModalHobby(num:number) {
        setModalHobby(num)
    }


    return (
        <div className={"home-wrapper"}>
        <Header title={"home"}/>
        <TopNav title={"home"}/>
        <div className={"home"}>

            {modalTrait > 0 ?
                <div className={"home-attr-container"}>
                <HomeModal trait={modalTrait} setModalTrait={setModalTrait}/>
                </div>
                :
                <div className={"home-attr-container"}>

                    {trait === 0 &&
                    <>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(1)}>Initiating Improvements</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(2)}>Technological Innovation</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(3)}>Team Problem Solving</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleTraitArrow(trait + 1)
                        }}> {`>`} </div>
                    </>
                    }
                    {trait === 1 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleTraitArrow(trait - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(4)}>Cross-Organization Collaboration</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(5)}>Technology Integration</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalTrait(6)}>Leadership</div>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                    </>
                    }
                </div>
            }

            {modalAttr > 0 ?
                <div className={"home-attr-container"}>
                    <HomeModal attr={modalAttr} setModalAttr={setModalAttr}/>
                </div>
                :
                <div className={"home-attr-container"}>
                    {attr === 0 &&
                    <>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(1)}>HTML/CSS</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(2)}>React</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(3)}>JS/TS</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleAttrArrow(attr + 1)
                        }}> {`>`} </div>
                    </>
                    }

                    {attr === 1 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleAttrArrow(attr - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(4)}>Java/Kotlin</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(5)}>Python</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalAttr(6)}>Bash/Powershell</div>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                    </>
                    }
                </div>
            }

            {modalHobby > 0 ?
                <div className={"home-attr-container"}>
                    <HomeModal hobby={modalHobby} setModalHobby={setModalHobby}/>
                </div>
                :
                <div className={"home-attr-container"}>
                    {hobby === 0 &&
                    <>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(1)}>Home Lab</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(2)}>Electronics</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(3)}>Automation</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby + 1)
                        }}> {`>`} </div>
                    </>
                    }

                    {hobby === 1 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(4)}>Fabrication</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(5)}>Surveillance</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(6)}>Red Teaming</div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby + 1)
                        }}> {`>`} </div>
                    </>
                    }

                    {hobby === 2 &&
                    <>
                        <div className={"home-attr-arrow"} onClick={() => {
                            handleHobbyArrow(hobby - 1)
                        }}> {`<`} </div>
                        <div className={"home-attr-divider"}>...</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(7)}>MANET</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(8)}>TAK</div>
                        <div className={"home-attr-divider"}> -</div>
                        <div className={"home-attr-text"} onClick={() => handleModalHobby(9)}>SDR</div>
                        <div className={"home-attr-arrow-disabled"}> {`|`} </div>
                    </>
                    }

                </div>
            }
        </div>
            <Footer/>
        </div>
    );
}

export default Home;