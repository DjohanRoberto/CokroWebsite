import React from "react";
import './admin.css'

import { useNavigate } from "react-router-dom";
import { fileToDataUrl } from "../../helpers/fileToDataUrl";


const Admin = () => {

    const navigate = useNavigate()

    const [newPopup, setNewPopup] = React.useState(false)
    const [classes, setClasses] = React.useState({})
    const [trigger, setTrigger] = React.useState(false)

    // vars for new class form
    const [classTitle, setClassTitle] = React.useState('')
    const [classInstructor, setClassInstructor] = React.useState('')
    const [classDate, setClassDate] = React.useState('')
    const [classTime, setClassTime] = React.useState('')
    const [classDesc, setClassDesc] = React.useState('')
    const [classSlots, setClassSlots] = React.useState(0)
    const [classPrice, setClassPrice] = React.useState(0)
    const [classImg1, setClassImg1] = React.useState(null)
    const [classImg2, setClassImg2] = React.useState(null)
    const [classInstImg, setClassInstImg] = React.useState(null)

    React.useEffect(() => {
        fetch("/getclasses").then(
            res => res.json()
        ).then(
            data => {
                setClasses(data)
            }
        )
    }, [trigger])

    // creates a new class wutg details
    async function createNewClass(title, inst, date, time, desc, slots, price, img1, img2, inst_img) {

        // checks
        if (title === '' || inst === '' || date === '' || time === '' || desc === '' || slots === 0 || price === 0 || img1 === '' || img2 === '' || inst_img === '') {
            return false
        }

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                classtitle: title,
                instructor: inst,
                date: date,
                time: time,
                desc: desc,
                slots: slots,
                price: price,
                img1: img1,
                img2: img2,
                instimg: inst_img
            })
        }

        const res = await fetch('/admin/newclass', options);
        const data = await res.json()

        if (data.error) {
            console.log("New Class Error")
            return false
        } else {
            console.log("New Class Success")
            return true
        }
    }

    // deletes a class from the active classes by its id
    async function deleteClass(id) {
        const options = {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                classid: id
            })
        }

        const res = await fetch('/admin/deleteclass', options);
        const data = await res.json()
        
        if (data.error) {
            console.log('Delete Error')
        } else {
            console.log('Delete Success')
        }
    }

    // resets the new class form
    async function resetForm() {
        setClassTitle('')
        setClassInstructor('')
        setClassDate('')
        setClassTime('')
        setClassDesc('')
        setClassSlots(0)
        setClassPrice(0)
        setClassImg1(null)
        setClassImg2(null)
        setClassInstImg(null)

        const img1 = document.getElementById('class_img_1')
        const img2 = document.getElementById('class_img_2')
        const inst = document.getElementById('inst_img')
    
        img1.value = null
        img2.value = null
        inst.value = null
    }

    // // gets details about a class by its id
    // async function getClassInfo(id) {
    //     const options = {
    //         method : 'GET',
    //         headers : {
    //             'Content-Type': 'application/json'
    //         },
    //         body : JSON.stringify({
    //             classid: id
    //         })
    //     }
    // }

    return (
        <div className="">
            {newPopup 
            ? <>
                <div className="popupBG"></div>
                <div className="newClassPopup">
                    <h1>New Class</h1>
                    <div className="class_form">
                        <label htmlFor="class_title">Class Title</label>
                        <input type="text" className="class_title" id='class_title' value={classTitle} onInput={e => setClassTitle(e.target.value)}/>

                        <label htmlFor="class_instructor">Instructor</label>
                        <input type="text" className="class_instructor" id='class_instructor' value={classInstructor} onInput={e => setClassInstructor(e.target.value)}/>

                        <label htmlFor="class_date">Class Date</label>
                        <input type="date" className="class_date" id='class_date' value={classDate} onInput={e => setClassDate(e.target.value)}/>
                        
                        <label htmlFor="class_time">Class Time</label>
                        <input type="time" className="class_time" id='class_time' value={classTime} onInput={e => setClassTime(e.target.value)}/>
                        
                        <label htmlFor="class_desc">Description</label>
                        <input type="text" className="class_desc" id='class_desc' value={classDesc} onInput={e => setClassDesc(e.target.value)}/>

                        <label htmlFor="class_slots">Slots</label>
                        <input type="number" className="class_slots" id='class_slots' value={classSlots} onInput={e => setClassSlots(e.target.value)}/>

                        <label htmlFor="class_price">Price</label>
                        <input type="number" className="class_price" id='class_price' value={classPrice} onInput={e => setClassPrice(e.target.value)}/>

                        <label htmlFor="class_img_1">Image 1</label>
                        <input type="file" accept="image/*" className="class_img_1" id='class_img_1' onChange={async file => {
                            setClassImg1(await fileToDataUrl(file.target.files[0]))
                        }}/>
                        
                        <label htmlFor="class_img_2">Image 2</label>
                        <input type="file" accept="image/*" className="class_img_2" id='class_img_2' onChange={async file => {
                            setClassImg2(await fileToDataUrl(file.target.files[0]))
                        }}/>
                        
                        <label htmlFor="inst_img">Instructor Image</label>
                        <input type="file" accept="image/*" className="inst_img" id='inst_img' onChange={async file => {
                            setClassInstImg(await fileToDataUrl(file.target.files[0]))
                        }}/>
                        
                        <button className="create_popup_button" onClick={async () => {
                            const ret = await createNewClass(classTitle, classInstructor, classDate, classTime, classDesc, classSlots, classPrice, classImg1, classImg2, classInstImg)
                            if (ret === true) {
                                setTrigger(!trigger)
                                setNewPopup(false)
                                // snack bar : success (refresh if needed)
                            } else {
                                console.log('missing inputs')
                                // snack bar : failed
                            }
                        }}>Create </button>
                        <button className="popup_reset" onClick={() => {
                            resetForm()
                        }}>Reset</button>
                        <button className="popup_close" onClick={() => {
                            setNewPopup(false)
                        }}>Close</button>
                    </div>
                </div>
            </>
            : <>
            </>}
        
            <div className="container">
                <h1 className="admin_title">Welcome</h1>
                <button className="create_button" onClick={() => {
                    setNewPopup(true)
                    setTrigger(!trigger)
                }}>Create New Class</button>
                <div className="classes_section">
                    <div className="class_section_top">
                        <h1>Classes</h1>
                        <button onClick={() => setTrigger(!trigger)}>Refresh</button>
                    </div>
                    {Object.keys(classes).length === 0 
                    ? <>
                        <div>No Classes Currently Planned</div>
                    </> 
                    : <>    
                        {Object.keys(classes).map(c => (
                        <>
                            {<>
                                <div className="class_posting" onClick={() => {
                                    navigate('/admin/' + c)
                                }} key={c}>
                                    <h1 className="title">{classes[c].classtitle}</h1>
                                    <div className="border"></div>
                                    <div className="right">
                                        <h2 className="instructor">{classes[c].instructor}</h2>
                                        <h3 className="date">{classes[c].date}, {classes[c].time}</h3>
                                        <button className="delete" onClick={(e) => {
                                            deleteClass(c)
                                            setTrigger(!trigger)
                                            e.stopPropagation()
                                        }
                                            }>Delete Class</button>
                                    </div>
                                </div>
                            </>}
                        </>
                        ))}
                    </>
                }
                </div>
            </div>
        </div>
    );
}

export default Admin;

