import React from 'react'
import './Appointment.css'
// import Navmenu from './Navmenu/Navmenu';
// import Header from './Header/Header';
export default function Appointment() {
  return (
    <div className='Appointment'>
      {/* <Header/>
      <Navbar/> */}
      <div className="AppointmentText">
        <h3>Appointment</h3>
        <input className='search' type="search" placeholder='search'/>
        {/* <button className='Adsbutton'>Add Ads</button> */}
        <span>New Ads</span>
      </div>
      <div className="Table">
        
      </div>
    </div>
  )
}
