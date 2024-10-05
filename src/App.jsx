/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */
import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Home from "../pages/Home.jsx"
import About from ".././pages/About.jsx"
import Vans from '../pages/Vans.jsx'
import "../server.js"
import VanDetail from "../pages/VanDetail.jsx"
import Layout from "../components/Layout.jsx"



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>{/*nested inside to keep the copy of this url param*/}
          {/* <Route path="/" element={<Host />}/> wasnt supposed to add this here */}
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )////id is like a parameter for the site to know that if there is anything
          // following after it should display "VanDetail" component content.
}

export default App
