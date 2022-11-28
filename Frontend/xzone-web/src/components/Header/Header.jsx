import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Header.css'
import Logo from "../../assets/Logo.svg"
import Admin from "../../assets/Admin.svg"


export default function Header() {
  
  const Menus =["Profile","Logout"];
  return (
      <div className="Header">
          <img src={Logo} alt="" className="Headerlogo" />
          {/* <Link to="/profile" ><img src={Admin} alt="" className="Admin" /></Link> */}
          <img src={Admin} alt="" className="Admin" />
          {/* <div className='profilebackground'>
            <div className='profiledropdown'><Link to="/profile" className='profiledropdown' >My Profile</Link></div>
            <hr />
            <div className='profiledropdown'><Link to="/login" className='profiledropdown' >Logout</Link></div>   
          </div> */}
      </div>
      
  )
}
