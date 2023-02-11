import React from "react"
import '../styles/login.css'
import RegisterComponent from "../components/RegisterComponent"
import '../styles/responsive.css'

function Register(){
    return(
        <div className="login center">
            <div className="contents center">
                <div className="banner"></div>
                <RegisterComponent/>
                <div className="banner"></div>
            </div>
        </div>
        )
}

export default Register
