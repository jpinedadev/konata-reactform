import React from "react"
import Konata from '../images/konata_logo.png'
import '../styles/home.css'
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home center">
            <div className="content center">
            <img src={Konata} className="konata" alt="konata"/>
            <h2>LOREM</h2>
            <h1>IPSUM</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            <Link to="/login" className="btn button-17">LET'S START</Link>
            </div>
        </div>
        )
}

export default Home
