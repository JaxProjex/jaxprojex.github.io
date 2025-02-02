import React, {useState} from "react";
import "../CSS/ProjexBlogImages.css"

function ProjexBlogImages({images}) {

    const imgPath = "images/";
    const [imgIndx, setImgIndx] = useState(0);
    const [imgPopup, setImgPopup] = useState(false);

    function handleImagePopup() {
        return (
            <>
                <div className={"projexblogimages-popup-void"} onClick={() => setImgPopup(false)}/>

                <div className={"projexblogimages-popup-container"}>
                    <div className={"projexblogimages-popup-x-container"}>
                        <div className={"projexblogimages-popup-x"} onClick={() => setImgPopup(false)}>X</div>
                    </div>
                    <img className={"projexblogimages-popup"} src={imgPath + images[imgIndx]} alt={images[imgIndx]}/>
                </div>
            </>
        )
    }

    function handleImgPrev(){
        if (imgIndx === 0) {
            setImgIndx(images.length-1)
        } else {
            setImgIndx(imgIndx-1)
        }
    }

    function handleImgNext(){
        if (imgIndx === images.length-1) {
            setImgIndx(0)
        } else {
            setImgIndx(imgIndx+1)
        }
    }


    return (
        <>
                <div className={"projexblogimages-container"}>
                    <div className={"projexblogimages-arrow"} style={{color: "white"}}
                         onClick={handleImgPrev}>&lt;</div>

                    <div className={"projexblogimages-container-1"}>
                        <img className={"projexblogimages-img"} src={imgPath + images[imgIndx]} alt={images[imgIndx]}
                             onClick={() => setImgPopup(true)}/>
                    </div>

                    <div className={"projexblogimages-arrow"} style={{color: "white"}}
                         onClick={handleImgNext}>&gt;</div>
                </div>

                {imgPopup && (handleImagePopup())}
        </>
    )

}

export default ProjexBlogImages;