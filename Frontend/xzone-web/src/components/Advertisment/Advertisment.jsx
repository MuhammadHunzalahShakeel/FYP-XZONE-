import React from 'react'
import Button from '@mui/material/Button';
// import Button from 'react-bootstrap/Button';
// import { Button } from 'react-responsive-button';
import './Advertisment.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Advertisment(props) {
  return (
    <div >
      <Header/>
       <Navmenu/>
      <div className="AdvertismentText">
        <h3>{props.title}</h3>
        <input className='search' type="search" placeholder='search'/>
        {/* <button class="btn"><i class="fa fa-plus"></i> Home</button> */}
        {/* <Button variant="outlined" >Delete</Button> */}
        {/* <span>New Ads</span> */}
      <button className='Adsbutton'>Add Ads</button>
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