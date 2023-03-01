import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
import Logo from "../../assets/Logo.svg"
import Admin from "../../assets/Admin.svg"
import { useNavigate } from "react-router-dom";



export default function Header() {
  const navigate = useNavigate();

  const logout=()=>{
    localStorage.clear();
    navigate('/login')
  }
  const[profile,setprofile]=useState(false);
  return (
      <div className="Header">
          <Link to="/advertisment" ><img src={Logo} alt="" className="Headerlogo" /></Link>
          <img  src={Admin} alt="" className="Admin"  />
          <div className='profilebackground'  >
            <div className='profiledropdown'  ><Link to="/profile" className='profiledropdown'>My Profile</Link></div>
            <hr />
            <div className='profiledropdown' onClick={logout}><Link to="/login" className='profiledropdown'  >Logout</Link></div>   
          </div>
      </div>
      
  )
}
