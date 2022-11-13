import React from 'react'
import './Staff.css'
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Staff(props) {
  return (
    <div>
      <Header/>
      <Navmenu/>
      <div className="StaffText">
        <h3>{props.title}</h3>
        <input className='search' type="search" placeholder='search'/>
        <a href="something" class="button1">Add Staff</a>
      </div>
    </div>
  )
}