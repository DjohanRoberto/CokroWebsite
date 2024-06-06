import React from "react";
import './admin.css'

import { fileToDataUrl } from "../../helpers/fileToDataUrl";


const Admin = () => {

    const [newPopup, setNewPopup] = React.useState(false)
    const [classes, setClasses] = React.useState({})
    const [trigger, setTrigger] = React.useState(false)

    // vars for new class form
    const [classTitle, setClassTitle] = React.useState('')
    const [classInstructor, setClassInstructor] = React.useState('')
    const [classDate, setClassDate] = React.useState('')
    const [classTime, setClassTime] = React.useState('')
    const [classDesc, setClassDesc] = React.useState('')
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

    // def createNewClass(classtitle, instructor, date, time, desc, img1, img2, instructorImg):
    async function createNewClass(title, inst, date, time, desc, img1, img2, inst_img) {
        // TODO
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
                img1: img1,
                img2: img2,
                instimg: inst_img
            })
        }

        const res = await fetch('/admin/newclass', options);
        const data = await res.json()

        if (data.error) {
            console.log("New Class Error")
        } else {
            console.log("New Class Success")
        }
    }

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
                        
                        <button className="create_popup_button" onClick={() => {
                            createNewClass(classTitle, classInstructor, classDate, classTime, classDesc, classImg1, classImg2, classInstImg)
                            setTrigger(!trigger)
                            setNewPopup(false)
                        }}>Create </button>
                        <button className="popup_close" onClick={() => {
                            setNewPopup(false)
                        }}>Close</button>
                    </div>
                </div>
            </>
            : <>
            </>}
        
            <div className="container">
                <h1 className="admin_title">Admin Page</h1>
                <button className="create_button" onClick={() => {
                    setNewPopup(true)
                    // createNewClass()
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
                                <div className="class_posting" key={c}>
                                    <h1 className="title">{c}</h1>
                                    <div className="border"></div>
                                    <div className="right">
                                        <h2 className="instructor">Instructor</h2>
                                        <h3 className="date">01 January 2024, 11am - 4pm</h3>
                                        <button className="delete" onClick={() => {
                                            deleteClass(c)
                                            setTrigger(!trigger)
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

