import React from 'react'
import Image from "../../src/logo192.png"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='left-nav'>
            <img src={Image} alt="logo" />
            <p>ReactFacts</p>
        </div>
        <div className='right-nav'>
            <p>React Course - Project 1</p>
        </div>
    </nav>
  )
}

export default Navbar