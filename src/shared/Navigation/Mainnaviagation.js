import React from 'react'
import "./Mainnavigation.css"
import Mainheader from './Mainheader'
import {Link} from 'react-router-dom'
import Navlinks from './Navlinks'
import Sidedrawer from './Sidedrawer'

function Mainnaviagation(props) {
  return (  <>
    <Sidedrawer>
     <nav className='main-navigation__drawer-nav'>
     <Navlinks/>
     </nav>
    </Sidedrawer>
  <Mainheader>
    <button className='main-navigation__menu-btn'>
        <span/>
        <span/>
        <span/>
    </button>
    <h1 className='main-navigation__title'>
        <Link to  ="/">Your Places</Link>
    </h1>
    <nav className='main-navigation__header-nav'><Navlinks/></nav>
  </Mainheader>
  </>  
  )
}

export default Mainnaviagation