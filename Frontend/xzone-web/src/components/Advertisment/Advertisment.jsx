import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
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
  const[modal,setmodal]=useState(false)
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
    <div>
      <Header/>
       {/* <Navmenu/> */}
      <div className="AdvertismentText">
        <h3>{props.title}</h3>
        
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add New Ads
            </ModalHeader>
            <ModalBody> 
                <form action="">
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Ads Shop
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Shop Name'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Ads Category
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Ads Category'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Instruction
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Instruction'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          View Ads
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Ads'
                        name='oldPassword'>
                        </input>
                      </div>
                    </Col>
                  </Row>
                </form> 
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}}>Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                
            </ModalBody>
            
          </Modal>
          
          <input className='search' type="search" placeholder='search'/>
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Ads</button>
          
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