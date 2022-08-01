import React , {useState} from 'react'
import "./Mainnavigation.css"
import Mainheader from './Mainheader'
import {Link} from 'react-router-dom'
import Navlinks from './Navlinks'
import Sidedrawer from './Sidedrawer'
import Backdrop from '../components/UIelements/Backdrop'

function Mainnaviagation(props) {

  const [drawerisopen , setdrawerisopen] = useState(false);

  const openDrawer = () =>
  {
    setdrawerisopen(true);
  }

  function closeDrawer()
  {
    setdrawerisopen(false);
  }

  return (  <>
  {drawerisopen && <Backdrop onClick = {closeDrawer}/>}
    {drawerisopen && (<Sidedrawer>
     <nav className='main-navigation__drawer-nav'>
     <Navlinks/>
     </nav>
    </Sidedrawer>)}
  <Mainheader>
    <button className='main-navigation__menu-btn' onClick = {openDrawer}>
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