import React from 'react'
import "./Mainnavigation.css"
import Mainheader from './Mainheader'
import {Link} from 'react-router-dom'
import Navlinks from './Navlinks'

function Mainnaviagation(props) {
  return (  <Mainheader>
    <button className='main-navigation__menu-btn'>
        <span/>
        <span/>
        <span/>
    </button>
    <h1 className='main-navigation__title'>
        <Link to  ="/">Your Places</Link>
    </h1>
    <nav><Navlinks/></nav>
  </Mainheader>  
  )
}

export default Mainnaviagation