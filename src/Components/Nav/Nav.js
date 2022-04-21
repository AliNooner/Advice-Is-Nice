import React from 'react'
import './Nav.css'
import { Route, NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className='navigation'>
      <div className='title-div'>
        <h1 className='title'>The Advice App</h1>
        <h4>You've got this!</h4>
      </div>
      <div className='nav-buttons'>
      <NavLink to ='/' style={{textDecoration: 'none'}}>
        <p className='home-link'>Home</p>
      </NavLink>
      <NavLink to ='/favorites' style={{textDecoration: 'none'}}>
        <p className='favorites-link'>Favorites</p>
      </NavLink>
      </div>
    </nav>
  )
}




export default Nav;
