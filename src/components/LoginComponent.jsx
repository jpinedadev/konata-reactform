import React from "react"
import '../styles/login.css'
import { Link } from "react-router-dom";
import konata from '../images/konata_logo.png'
import { HiOutlineKey, HiOutlineUser } from "react-icons/hi";


function LoginComponent(){
    return(
        <div className="inners center">
            <div className="contents2 square">
                <label>
                    <img src={konata} className="konata" alt="konata_logo" />
                    </label>
                <label>
                    <HiOutlineUser/>
                <input 
                    type="text"
                    placeholder="Username"
                >
                </input>
            </label>
            <label>
            <HiOutlineKey/>
                <input
                    type="text"
                    placeholder="Password"
            />
            </label>
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
