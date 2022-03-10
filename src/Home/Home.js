import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="home-container">
        Home
        <br> </br>
        <Link to ="/about">Go to About Route</Link>
        </div>
  )
}

export default Home