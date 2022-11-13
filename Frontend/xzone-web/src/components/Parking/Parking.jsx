import React from 'react'
import './Parking.css'
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Parking(props) {
  const theadData = ["No.", "Car Number", "Arrivet At", "Depart", "Parking Fee","Status", "Actions"];
  const tbodyData = [
      {
          id: "1",
          items: ["1", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "2",
          items: ["2", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "3",
          items: ["3", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "4",
          items: ["4", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "5",
          items: ["5", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "6",
          items: ["6", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "7",
          items: ["7", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "8",
          items: ["8", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "9",
          items: ["9", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
      {
          id: "10",
          items: ["10", "ADF - 568", "02-10-22 11:30 P.M", "02-10-22 11:30 P.M", "22yrs","Paid", ":"],
      },
  ];
  return (
    <div >
      <Header/>
       <Navmenu/>
      <div className="ParkingText">
        <h3>{props.title}</h3>
        <input className='search' type="search" placeholder='search'/>
        {/* <span>New Ads</span> */}
        <a href="something" class="button1">Add Car</a>
      </div>
      <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
     
    </div>
  )
}
