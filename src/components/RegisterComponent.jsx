import React from "react"
import '../styles/login.css'
import { Link } from "react-router-dom";
import { HiOutlineKey, HiOutlineUser, HiOutlineMail } from "react-icons/hi";
import '../styles/responsive.css'

function RegisterComponent(){
    return(
        <div className="inners center">
            <div className="contents2 square">

                <label>
                    <h1 className="reg">REGISTRATION</h1>
                </label>

                <label>
                    <HiOutlineUser/>
                    <input 
                        type="text"
                        placeholder="Username"
                    />
                </label>

                <label>
                    <HiOutlineKey/>
                    <input
                        type="text"
                        placeholder="Password"
                    />
                </label>

                <label>
                    <HiOutlineMail/>
                    <input
                        type="text"
                        placeholder="Email"
                    />
                </label>

            </div>

            <div className="center space2">
                <Link to="/" className="btn button-34">REGISTER</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adispicing elit. in ut risus eros.</p>
            </div>
        </div>
        )
}

export default RegisterComponent
