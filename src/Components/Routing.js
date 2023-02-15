import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import ucrclogo from '../Images/ucrc-logo.png';
import About from './About';


const Routing = () => {
  return (
    <div>

    <div className='header'>
          <img src={ucrclogo} alt={ucrclogo} className="ucrclogo" />
          <nav>
  <ul>
   <Link to='/'> <li>Home</li> </Link>
    <Link to='/About'> <li>About Us</li> </Link>
    
            <Link to='/Lending'><li className="dropdown">
      Lending
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
    </li></Link>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>} />
      </Routes>
      </div>
  )
}

export default Routing;
