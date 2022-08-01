import React from 'react'
import './Sidedrawer.css'

function Sidedrawer(props) {
  return (<aside className='side-drawer'>
     {props.children}
   </aside>)
}

export default Sidedrawer