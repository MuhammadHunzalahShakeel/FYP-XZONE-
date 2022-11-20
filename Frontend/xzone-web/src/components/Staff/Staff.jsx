import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Staff.css'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Staff(props) {
    const[modal,setmodal]=useState(false)
    const theadData = ["No.", "Staff Number", "Staff Name", "Staff Gender", "Staff Age", "Salary", "Joining Date", "Action"];
    const tbodyData = [
        {
            id: "1",
            items: ["1", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022", ":"],
        },
        {
            id: "2",
            items: ["2", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "3",
            items: ["3", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "4",
            items: ["4", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "5",
            items: ["5", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "6",
            items: ["6", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "7",
            items: ["7", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "8",
            items: ["8", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "9",
            items: ["9", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        {
            id: "10",
            items: ["10", "Xstaff - 101", "LIPID PANEL", "Fatima Bilal", "22yrs", "50k", "14 Oct 2022",  ":"],
        },
        
    ];
  return (
    <div>
      <Header/>
      <Navmenu/>
      <div className="StaffText">
        <h3>{props.title}</h3>
        <div>
        <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Staff
            </ModalHeader>
            <ModalBody> 
                <form action="">
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Staff Number
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Number'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Gender
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Gender'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Age
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Age'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Salary
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Salary'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Joining Date
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Joining Date'
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
        <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Staff</button>
        </div>
      </div>
      <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div>
    </div>
  )
}