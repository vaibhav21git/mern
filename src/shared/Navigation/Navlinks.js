import React from 'react'
import './Navlinks.css'
import { NavLink } from 'react-router-dom'



function Navlinks(props) {
  return (<ul className='nav-links'>
    <li>
        <NavLink to = '/' exact>All Users</NavLink>
    </li>
    <li>
        <NavLink to = '/u1/places' >My places</NavLink>
    </li>
    <li>
        <NavLink to = '/places/new'>Add place</NavLink>
    </li>
    <li>
        <NavLink to = '/auth'>AUTHENTICATE</NavLink>
    </li>
  </ul>   
  )
}

export default Navlinks