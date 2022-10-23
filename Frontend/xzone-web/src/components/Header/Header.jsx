import React from 'react'
import './Header.css'
import Logo from "../../assets/Logo.svg"
import AdvertismentNavMenu from "../../assets/AdvertismentNavMenu.svg"
import ShopNavMenu from "../../assets/ShopNavMenu.svg"
import ParkingNavMenu from "../../assets/ParkingNavMenu.svg"
import StaffNavMenu from "../../assets/StaffNavMenu.svg"
import EmergencyNavMenu from "../../assets/EmergencyNavMenu.svg"
import CustomerNavMenu from "../../assets/CustomerNavMenu.svg"
import Admin from "../../assets/Admin.svg"
export default function Header() {
  return (
      <div className="Header">
          <img src={Logo} alt="" className="Headerlogo" />
          <img src={Admin} alt="" className="Admin" />
      </div>
      
  )
}
