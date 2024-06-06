import React from "react";
import './admin.css'


const Admin = () => {

    const [newPopup, setNewPopup] = React.useState(false)
    const [classes, setClasses] = React.useState({})
    const [trigger, setTrigger] = React.useState(false)

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
    async function createNewClass() {
        // TODO
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                classtitle: 'Temp Class',
                instructor: 'Mr Teacher',
                date: "01 January 2024",
                time: "10PM",
                desc: "Erm this is a class description erm",
                img1: 'img1',
                img2: 'img2',
                instructor_img: 'instructor_img'
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
                    {/* 
                        Class Title
                        Instructor
                        Date and Time
                        Description
                        image 1 & 2
                        instructor_img
                    */}
                    <h1>New Class</h1>
                    <input type="text" className="class_title" key='class_title' />
                    <input type="text" className="instructor" key='instructor' />
                    <input type="text" className="class_date" key='class_date' />
                    <input type="text" className="class_time" key='class_time' />
                    <input type="text" className="class_desc" key='class_desc' />
                    <input type="file" className="class_img_1" key='class_img_1' />
                    <input type="file" className="class_img_2" key='class_img_2' />
                    <input type="file" className="inst_img" key='inst_img' />
                    <button className="create_popup_button" onClick={() => {
                        createNewClass()
                        setTrigger(!trigger)
                        setNewPopup(false)
                    }}>Create </button>
                    <button className="popup_close" onClick={() => {
                        setNewPopup(false)
                    }}>Close</button>
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

