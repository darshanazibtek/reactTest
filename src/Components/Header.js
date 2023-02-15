import React from 'react'
import ucrclogo from '../Images/ucrc-logo.png';
import './Header.css';

const Header = () => {
  return (
      <div className='header'>
          <img src={ucrclogo} alt={ucrclogo} className="ucrclogo" />

          <nav>
  <ul>
    <li>Home</li>
    <li>About Us</li>
    <li className="dropdown">
      Lending
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </li>
    <li className="dropdown">
      Membership
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </li>
    <li className="dropdown">
      Resources
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </li>
  </ul>
</nav>

          
      
    </div>
  )
}

export default Header
