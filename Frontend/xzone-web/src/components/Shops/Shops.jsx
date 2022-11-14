import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Shops.css'
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';


export default function Shops(props) {
    const[modal,setmodal]=useState(false)
    const theadData = ["No.", "Shop Number", "Shop Name", "Owner Name", "Purpose", "Demand", "Floor", "Area", "Status", "Action"];
    const tbodyData = [
        {
            id: "1",
            items: ["1", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "2",
            items: ["2", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "3",
            items: ["3", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "4",
            items: ["4", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "5",
            items: ["5", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "6",
            items: ["6", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "7",
            items: ["7", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "8",
            items: ["8", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "9",
            items: ["9", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        {
            id: "10",
            items: ["10", "Xzone - 101", "LIPID PANEL", "Fatima Bilal", "For Rent", "50k", "1st", "200sq", "Available", ":"],
        },
        
    ];
  return (
    <div >
      <Header/>
       <Navmenu/>
      <div className="ShopsText">
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
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Shops</button>
          
        </div>
      </div>
      <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
     
    </div>
  )
}
