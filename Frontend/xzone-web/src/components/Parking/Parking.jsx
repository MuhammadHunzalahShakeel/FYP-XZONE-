import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Parking.css'
import ParkingTables from './ParkingTables.jsx';
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';


export default function Parking(props) {
  const[modal,setmodal]=useState(false);
  
  return (
    <div >
      <Header/>
       <Navmenu/>
      <div className="ParkingText">
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
                          Car Number
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Car Number'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Arrivet At
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Arrivet At'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Depart
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Depart'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Parking Fee
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Parking Fee'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Status
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Status'
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
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Parking</button>
          
        </div>
      <ParkingTables/>
      </div>
      
     
    </div>
  )
}
