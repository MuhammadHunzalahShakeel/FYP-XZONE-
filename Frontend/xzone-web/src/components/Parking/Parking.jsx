import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Parking.css'
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Parking(props) {
  const[modal,setmodal]=useState(false)
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
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Parking</button>
          
        </div>
      </div>
      <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
     
    </div>
  )
}
