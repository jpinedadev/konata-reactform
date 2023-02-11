import React from "react"
import '../styles/login.css'
import LoginComponent from "../components/LoginComponent"
import '../styles/responsive.css'

function Login(){
    return(
        <div className="login center">
            <div className="contents center">
                <div className="banner"></div>
                <LoginComponent/>
                <div className="banner"></div>
            </div>
        </div>
        )
}

export default Login
