import React from "react";
import "./adminlogin.css"
import logo from "../../../assets/logo cokro 2.png";
import { useNavigate } from "react-router-dom";

// const JSON_SECRET = 'nopuedoparardecagar';

const AdminLogin = () => {

    const nav = useNavigate()
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')


    const loginFn = (username, password) => {

        const options = {
			method : "GET",
			headers : {
				'Content-Type': 'application/json'
			}
		}

        fetch("/admin/login?username=" + username + "&password=" + password, options).then(
            res => res.json()
        ).then(
            data => {
                if (data) {
                    //make token (reference old projects)
                    nav('/admin')
                } else {
                    //snackbar (failed login wrong credentials)
                }
            }
        )
    }

    return (
        <> 
            <div className="adminlogin">
                <img className="logo" src={logo} alt="logo"/>
                <h1>Admin Login</h1>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} id="username" onInput={e => {
                    setUsername(e.target.value)
                }}/>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} id="password" onInput={e => {
                    setPassword(e.target.value)
                }}/>
                <button className="login-button" onClick={() => loginFn(username, password)}>Login</button>
            </div>
        </>
    )

}

export default AdminLogin;