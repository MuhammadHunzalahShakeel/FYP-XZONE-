import React from 'react'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-responsive-button';
import './Advertisment.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';


export default function Advertisment(props) {
  const theadData = ["Ads No.", "Ads Shop", "Ads Category", "Instructions", "View Ads", "Actions"];
    const tbodyData = [
        {
            id: "1",
            items: ["1", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "2",
            items: ["2", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "3",
            items: ["3", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "4",
            items: ["4", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "5",
            items: ["5", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "6",
            items: ["6", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "7",
            items: ["7", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "8",
            items: ["8", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "9",
            items: ["9", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
        {
            id: "10",
            items: ["10", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
        },
    ];
  return (
    <div >
      <Header/>
       {/* <Navmenu/> */}
      <div className="AdvertismentText">
        <h3>{props.title}</h3>
        <div>
          <input className='search' type="search" placeholder='search'/>
          <a href="something" class="button1">Add Ads</a>
        </div>
      </div>
      {/* <div className='Tablebackground'></div> */}
      <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
     
    </div>
  )
}



// import React, { Component } from 'react';
// import Header from '../Header/Header.jsx';
// import Navmenu from '../Navmenu/Navmenu.jsx';
// import { Link } from "react-router-dom";
// import PropTypes  from 'prop-types'
// class Advertisment {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Navmenu />
//         <div className="AdvertismentText">
//         <h3>{props.title}</h3>
//         <input className='search' type="search" placeholder='search'/>
//         {/* <button className='Adsbutton'>Add Ads</button> */}
//         <span>New Ads</span>
//       </div>
//       </div>
//     );
//   }
// }
 
// export default App;