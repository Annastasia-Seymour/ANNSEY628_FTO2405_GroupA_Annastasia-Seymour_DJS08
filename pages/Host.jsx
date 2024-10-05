import React from "react";
import { Link, Route, Routes } from "react-router-dom"
import Layout from "../components/Layout";

export default function Host(){
    return (
        <Routes element={<Layout/>}>
            <Route>
            <Route path="/host/income" element={<Home />}/>
            <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
            </Route>

        </Routes>
        
        )


}