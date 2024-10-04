import React from "react";
import { Link } from "react-router-dom"

export default function Vans(){
    return (
        <div className="home-container">
            <h1>Vans page goes here</h1>
           
            <Link to="vans">Find your van</Link>
        </div>
    )

}