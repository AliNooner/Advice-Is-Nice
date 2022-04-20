import React from 'react'
import './Nav.css'
import { Route, NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className='navigation'>
      <div className='title-div'>
        <h1 className='title'>You've Got This</h1>
        <h4>Advice for your life</h4>
      </div>
      <div className='nav-buttons'>
      <NavLink to ='/'>
        <p className='home-link'>Home</p>
      </NavLink>
      <NavLink to ='/favorites'>
        <p className='favorites-link'>Favorites</p>
      </NavLink>
      </div>
    </nav>
  )
}




export default Nav;
