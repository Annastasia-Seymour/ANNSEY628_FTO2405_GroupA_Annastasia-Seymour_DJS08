import React from "react";
import { Link } from "react-router-dom"
import '../server.js';

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())//converts or interprets the api to readable js
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (//map method added to create new array
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))
    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
        <div className="van-list">
            {vanElements}
        </div>
    </div>)
    
}