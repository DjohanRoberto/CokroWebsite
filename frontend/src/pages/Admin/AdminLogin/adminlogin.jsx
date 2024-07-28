import React from "react";

import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const nav = useNavigate()

    const tempTest = () => {
        nav('/adminlogin/12')
    }

    return (
        <> 
            <div className="adminlogin">
                <button onClick={() => tempTest()}>Login</button>
            </div>
        </>
    )

}

export default AdminLogin;