import React from "react"
import { useParams } from "react-router-dom"


export default function VanDetail() {
    const params = useParams()// had a typo here gave klomp errors
    // grabs the params from the url to make fetch request to get the van with that specific id
    console.log(params)
    const [van, setVan] = React.useState(null)

    React.useEffect (()=> {
        fetch(`/api/vans/${params.id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
        .catch(err=> console.error("Unable to fetch request! : ", err))
    }, [params.id])
    return (
        <div className="van-detail-container">
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}