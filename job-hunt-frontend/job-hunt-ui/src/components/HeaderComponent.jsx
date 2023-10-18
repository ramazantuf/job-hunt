import React from 'react'
import logo from '../assets/logo7.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService'

const HeaderComponent = () => {

  const isAuth = isUserLoggedIn();
  const navigator = useNavigate();

  function handleLogout() {
    logout();
    navigator('/')
  }

  return (
    <div>
      <header className='header'>
        <nav className="navbar navbar-expand-md navbar-dark navcolor">
          <div className="navbar-brand">
          <a href="/" className='navbar-brand'><img id="logo"  src={logo}/></a>
          </div>
          <div className="collapse navbar-collapse">
              {
                isAuth && 
                <ul className="navbar-nav">
              <li className="nav-item font-monospace">
                <NavLink to='/jobs' className="nav-link" style={{color:"white", fontSize:""}}>jobs</NavLink>
              </li>
              <li className="nav-item font-monospace">
                <NavLink to='/titles' className="nav-link" style={{color:"white"}}>titles</NavLink>
              </li>
              <li className="nav-item font-monospace">
                <NavLink to='/positions' className="nav-link" style={{color:"white"}}>positions</NavLink>
              </li>
              <li className="nav-item font-monospace">
                <NavLink to='/stages' className="nav-link" style={{color:"white"}}>stages</NavLink>
              </li>
              <li className="nav-item font-monospace">
                <NavLink to='/locations' className="nav-link" style={{color:"white"}}>locations</NavLink>
              </li>
            </ul>
              }
          </div>
            <ul className="navbar-nav">
            {
              !isAuth &&
                <li className="nav-item">
                <NavLink to='/register' className='nav-link font-monospace' style={{color:"white"}}>Register</NavLink>
            </li>
            }
            {
              !isAuth &&
              <li className="nav-item">
              <NavLink to='/login' className='nav-link font-monospace' style={{color:"white"}}>Login</NavLink>
            </li>
            }
            {
              isAuth &&
              <li className="nav-item">
              <NavLink to='/' className='nav-link font-monospace' onClick={handleLogout} style={{color:"white"}}>Logout</NavLink>
            </li>
            }
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent