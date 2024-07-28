import React from "react";
import './editclass.css'
import { useNavigate } from "react-router-dom";
import { fileToDataUrl } from "../../helpers/fileToDataUrl";

const EditClass = ({classid}) => {

    const [trigger, setTrigger] = React.useState(false)
    const [title, setTitle] = React.useState('')
    const [inst, setInst] = React.useState('')
    const [date, setDate] = React.useState('')
    const [time, setTime] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [slots, setSlots] = React.useState('')
    const [price, setPrice] = React.useState('')
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
        setSlots(data['slots'])
        setPrice(data['price'])
        setImg1(data['img1'])
        setImg2(data['img2'])
        setImgInst(data['instructorImg'])
    }

    async function updateClass(classid, title, inst, date, time, desc, slots, price, img1, img2, instImg) {

        // checks
        if (title === '' || inst === '' || date === '' || time === '' || desc === '' || slots === 0 || price === 0 || img1 === '' || img2 === '' || instImg === '') {
            return false
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: classid,
                title: title, 
                inst: inst,
                date: date,
                time: time,
                desc: desc,
                slots: slots,
                price: price,
                img1: img1,
                img2: img2,
                instImg: instImg 
            }) 
        }

        const res = await fetch("/admin/updateclass", options)
        const data = await res.json()

        if (data.error) {
            console.log("Save error")
        } else {
            console.log("Save successful")
        }
    }


    React.useEffect(() => {
        getInfo(classid)
    }, [classid, trigger])

    const navigate = useNavigate();
    return (
        <div className="bg">
            <div className="edit-popup">
                <div className="close" onClick={() => {navigate('/admin')}}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
                </div>
                <div className="edit-q-form">
                    <div className="edit_left">
                        <label htmlFor="">Title</label>
                        <input type="text" id="edit_title" value={title} onInput={e => setTitle(e.target.value)}/>

                        <label htmlFor="">Instruction</label>
                        <input type="text" id="edit_inst" value={inst} onInput={e => setInst(e.target.value)}/>

                        <label htmlFor="">Date</label>
                        <input type="date" id="edit_date" value={date} onInput={e => setDate(e.target.value)}/>
                        
                        <label htmlFor="">Time</label>
                        <input type="text" id="edit_time" value={time} onInput={e => setTime(e.target.value)}/>

                        <label htmlFor="">Description</label>
                        <input type="text" id="edit_desc" value={desc} onInput={e => setDesc(e.target.value)}/>

                        <label htmlFor="">Slots</label>
                        <input type="number" id="edit_slots" value={slots} onInput={e => setSlots(e.target.value)}/>

                        <label htmlFor="">Price</label>
                        <input type="number" id="edit_price" value={price} onInput={e => setPrice(e.target.value)}/>
                    </div>
                    <div className="edit_right">
                        <label htmlFor="class_img_1">Image 1</label>
                        <input type="file" accept="image/*" className="class_img_1" id='edit_img1' onChange={async file => {
                            setImg1(await fileToDataUrl(file.target.files[0]))
                        }}/>
                        
                        <img className="edit_img" src={img1} alt="" />

                        <label htmlFor="class_img_2">Image 2</label>
                        <input type="file" accept="image/*" className="class_img_2" id='edit_img2' onChange={async file => {
                            setImg2(await fileToDataUrl(file.target.files[0]))
                        }}/>
                        
                        <img className="edit_img" src={img2} alt="" />

                        <label htmlFor="inst_img">Instructor Image</label>
                        <input type="file" accept="image/*" className="inst_img" id='edit_inst_img' onChange={async file => {
                            setImgInst(await fileToDataUrl(file.target.files[0]))
                        }}/>

                        <img className="edit_img" src={instImg} alt="" />
                    </div>    
                </div>
                <button onClick={async () => {
                    await updateClass(classid, title, inst, date, time, desc, slots, price, img1, img2, instImg)
                    setTrigger(true)
                    navigate('/admin')
                }}>Save</button>
                <button onClick={() => {navigate('/admin')}}>Cancel</button>
            </div>
            
        </div>
    );
}

export default EditClass;