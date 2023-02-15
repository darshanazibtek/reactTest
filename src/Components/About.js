import React from 'react'
import about from '../Images/1.jpg';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';


const About = () => {
  return (
    <div>
          <img src={about} />
          <p style={{textAlign:"center"}}>Rocky Mountain Community Reinvestment Corporation is a private 501(c)(3) nonprofit created and supported by Utah's banking community to increase the access to credit to serve low- and moderate-income communities.</p>
          <div className='row row-colums'>
              <div className='col-lg-2'>
                  <img src={img1} />
              </div>
              <div className='col-lg-2'>
                  <img src={img2} />
              </div>
              
    </div>
      </div>
  )
}

export default About
