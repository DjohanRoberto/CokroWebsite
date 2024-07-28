import React from "react";
import './slidegallery.css'

const SlideGallery = ({imgList}) => {

    const [focus, setFocus] = React.useState(false)
    const [focusImg, setFocusImg] = React.useState('')

    return <>
        <div className="slide_gallery">
            {focus 
            ? 
            <>
                <div className="focus-content">
                    <div className="bg" onClick={() => setFocus(false)}></div>
                    <img src={focusImg} alt="Not Found" className="img-focus" />

                </div>
            </> : 
            <> 
            </>
            }

            <div className="gallery-imgs">
                {imgList.map((i, index) => (
                    <>
                    <img onClick={() => {
                        setFocus(true)
                        setFocusImg(i)
                    }} className="slide-img" id={index} src={i} alt="" />
                    </>
                ))}
            </div>
        </div>
    </>


}

export default SlideGallery;