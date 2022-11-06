import React from 'react'
import './Header.css'
import Logo from "../../assets/Logo.svg"
import Admin from "../../assets/Admin.svg"
export default function Header() {
  return (
      <div className="Header">
          <img src={Logo} alt="" className="Headerlogo" />
          <img src={Admin} alt="" className="Admin" />
      </div>
      
  )
}
