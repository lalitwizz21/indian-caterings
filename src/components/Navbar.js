import React, { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isLoading, logout, isAuthenticated } = useAuth0();
  const [isMobile, setIsMobile] = useState(false)
  if (isLoading) return (<></>)

  return (
    <nav className='navbar'>
      <div className='nav-brand'>INDIAN CATERING</div>
      {
        !isMobile ?
          <img
            src={require('../img/hamburger.svg').default} alt="hamburger" className='nav-hamburger'  onClick={() => setIsMobile(true)}
          /> :
          <img
            src={require('../img/close.svg').default} alt="hamburger" className='nav-hamburger'  onClick={() => setIsMobile(false)}
          />
      }
      <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setIsMobile(false)}>
        <li>
          <a href="#">
            HOME
          </a>
        </li>
        <li>
          <a href="#">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#">
            CONTACT
          </a>
        </li>
        <li>
          <a href="#">
            SERVICES
          </a>
        </li>
        {
          !isAuthenticated ?
            <li>
              <button className="btn" onClick={() => loginWithRedirect()}>
                LOG IN
              </button>
            </li> :
            <li>
              <button className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
                LOG OUT
              </button>
            </li>
        }
      </ul>
    </nav>
  )
}

export default Navbar