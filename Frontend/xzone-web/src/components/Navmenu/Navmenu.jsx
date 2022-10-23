import React from 'react'
import './Navmenu.css'
import Logo from "../../assets/Logo.svg"
import AdvertismentNavMenu from "../../assets/AdvertismentNavMenu.svg"
import ShopNavMenu from "../../assets/ShopNavMenu.svg"
import ParkingNavMenu from "../../assets/ParkingNavMenu.svg"
import StaffNavMenu from "../../assets/StaffNavMenu.svg"
import EmergencyNavMenu from "../../assets/EmergencyNavMenu.svg"
import CustomerNavMenu from "../../assets/CustomerNavMenu.svg"
export default function Navmenu() {
  return (
      <div className='Navmenu'>
        <div className='Nav'>
          <img className='Advertisment'         src={AdvertismentNavMenu} alt="Logo Image"></img>  
          <img className='Shop'                 src={ShopNavMenu} alt="Logo Image"></img>  
          <img className='Parking'              src={ParkingNavMenu} alt="Logo Image"></img>  
          <img className='Staff'                src={StaffNavMenu} alt="Logo Image"></img>  
          <img className='Emergency'            src={EmergencyNavMenu} alt="Logo Image"></img>  
          <img className='CustomerAdvertisment' src={CustomerNavMenu} alt="Logo Image"></img>  
        </div>
    </div>  
  )
}
