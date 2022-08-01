import React from 'react'

import './Mainheader.css'

function Mainheader(props) {
  return (  <header className='main-header'>
        {props.children}
  </header>
    
  )
}

export default Mainheader