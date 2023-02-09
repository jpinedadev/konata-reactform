import React from "react"
import '../styles/login.css'
import { Link } from "react-router-dom";
import konata from '../images/konata_logo.png'

function LoginComponent(){
    return(
        <div className="inners center">
            <div className="contents2 center square">
                <img src={konata} className="konata" alt="konata_logo" />
                <input 
                    type="text"
                    placeholder="Username"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
            </div>
            <div className="center space">
                <Link to="/" className="btn button-34">LOG IN</Link>
                <p className="space-none">if you don't have Account</p>
                <Link to="/register" className="reg">Sign Up</Link>
            </div>
        </div>
        )
}

export default LoginComponent
