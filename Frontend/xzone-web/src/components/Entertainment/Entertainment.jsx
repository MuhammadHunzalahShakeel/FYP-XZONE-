import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Entertainment.css'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import EntertainmentTables from './EntertainmentTables.jsx';
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function  Entertainment(props) {
    const[modal,setmodal]=useState(false)
    // const theadData = ["No.", "Food Court No", "Name", "Category", "Description", "Website", "Action"];
    // const tbodyData = [
    //     {
    //         id: "1",
    //         items: ["1", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",  ":"],
    //     },
    //     {
    //         id: "2",
    //         items: ["2", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "3",
    //         items: ["3", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "4",
    //         items: ["4", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "5",
    //         items: ["5", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "6",
    //         items: ["6", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "7",
    //         items: ["7", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "8",
    //         items: ["8", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "9",
    //         items: ["9", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
    //     {
    //         id: "10",
    //         items: ["10", "ADF - 568", "LIPID PANEL", "Chinese", "Brand Description", "url of website",   ":"],
    //     },
        
    // ];
  return (
    <div>
      <Header/>
      {/* <Navmenu/> */}
      <div className=" EntertainmentText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Brand
            </ModalHeader>
            <ModalBody> 
                <form action="">
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                         Food Court No
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Food Court No'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Brand Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Category
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Category'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Description
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Description'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Website
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Website'
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
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Brand</button>
          
        </div>
        <EntertainmentTables/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
    </div>
  )
}