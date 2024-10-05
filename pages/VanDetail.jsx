import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const params = useParams()// had a typo here gave klomp errors
    console.log(params)
    return <h1>Van detail page goes here</h1>
}