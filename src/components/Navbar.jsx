import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ authenticated }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <NavLink className="navbar-brand" to='/' >Movies </NavLink>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          {authenticated ? (
            <>
              <li className="nav-item mx-auto">
                <NavLink to='/' className='nav-link'>Movies</NavLink>
              </li>
              <li className="nav-item mx-auto">
                <NavLink to='/overview' className='nav-link'>Directors</NavLink>
              </li>
            </>
          ) : (
            <li className="nav-item mx-auto">
              <NavLink to='/' className='nav-link'>Login</NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  )
}
