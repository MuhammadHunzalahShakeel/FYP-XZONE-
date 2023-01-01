import React from 'react'
import './Customer.css'
import  { Component } from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Chatbot from '../Chatbot/Chatbot.jsx';
import CountriesTables from '../Parking/ParkingTables.jsx';
import Header from '../Header/Header.jsx';
export default function Customer(props) {
  return (
    <div >
      <Header/>
       {/* <Navmenu/> */}
      <div className="CustomerText">
        <h3>{props.title}</h3>
        <input className='search' type="search" placeholder='search'/>
        <Chatbot/>
      {/* <CountriesTables/> */}
      </div>
     
    </div>
  )
}