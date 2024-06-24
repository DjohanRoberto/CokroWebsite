import React from "react";
import './classpopup.css'
import { useNavigate } from "react-router-dom";

const ClassPopup = ({classid}) => {
    const [title, setTitle] = React.useState('')
    const [inst, setInst] = React.useState('')
    const [date, setDate] = React.useState('')
    const [time, setTime] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [img1, setImg1] = React.useState(null)
    const [img2, setImg2] = React.useState(null)
    const [instImg, setImgInst] = React.useState(null)

    async function getInfo(classid) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'applcation/json'
            }
        }
        const res = await fetch('/getclass?classid='+classid, options)
        const data = await res.json()

        setTitle(data['classtitle'])
        setInst(data['instructor'])
        setDate(data['date'])
        setTime(data['time'])
        setDesc(data['desc'])
        setImg1(data['img1'])
        setImg2(data['img2'])
        setImgInst(data['instructorImg'])
    }


    React.useEffect(() => {
        getInfo(classid)
    })

    const navigate = useNavigate();
    return (
        <div className="bg">
            <div className="popup">
                <div className="close" onClick={() => {navigate('/classes')}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
                </div>
                <div className="left_popup">
                    <div className="text">
                        <div className="top_text">
                            <div className="top_left">
                                <h1 className="top_titles">{title}</h1>
                                <h2 className="top_titles">{inst}</h2>
                                <br /> 
                                <h2 className="top_titles">{date} <br />{time}</h2>
                            </div>
                            <div className="instructor_pic">
                                <img className='pic' src={instImg} alt="" />
                            </div>
                        </div>
                        <div className="mid_text">
                            <p>{desc}</p>
                        </div>
                        <div className="bot_text">
                            <button className="button">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="right_popup">
                    <div className="pics img1" style={{backgroundImage: `url(${img1})`}}></div>
                    <div className="pics img2" style={{backgroundImage: `url(${img2})`}}></div>
                </div>
            </div>
        </div>
    );
}

export default ClassPopup;