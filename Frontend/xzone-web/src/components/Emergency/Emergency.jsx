import React from 'react'
import './Emergency.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Emergency(props) {
  return (
    <div >
      <Header/>
       <Navmenu/>
      <div className="EmergencyText">
        <h3>{props.title}</h3>
        <input className='search' type="search" placeholder='search'/>
        <span>New Ads</span>
      </div>
     
    </div>
  )
}


// import {BrowserRouter as Router, Link} from 'react-router-dom';


// export default function Emergency() {
//   return (
//     <Router>
//       <div>
//         {/* <Link to="/login"> */}
//           <img src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"/>
//         {/* </Link> */}

//         <br />
//       </div>
//     </Router>
//   );
// }