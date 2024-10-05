import React from "react";
import { Link } from "react-router-dom"
import '../server.js';

export default function Vans(){
    const [vans, setVans] = React.useState([])
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])


    const vanElements = vans.map(van => (//map method added to create new array
        <div key={van.id} className="van-tile">
            <Link className="link-button" to={`/vans/${van.id}`}>
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                 <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
            
        </div>
    ))

    return (
        <div className="van-list-container">
          {/* <Link className="link-button" to="/vans/${van-id-here}">Explore our vans</Link>  */}
            <h1>Explore our van options</h1>
        <div className="van-list">
            {vanElements}
        </div>
    </div>)
    
}