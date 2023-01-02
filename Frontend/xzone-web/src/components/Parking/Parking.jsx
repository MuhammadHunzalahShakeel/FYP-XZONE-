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
  const[toggle,settoggle]=useState(false);
  const [data, setData] = useState([{
    "no":1,
    "Car_no":"ADF-568",
    "Arrive_at":"02-10-22 11:30 P.M",
    "Depart":"02-10-22 04:30 P.M",
    "Parking_fee":"500",
    "status":"Paid"
},{
  "no":2,
  "Car_no":"ADF-456",
  "Arrive_at":"03-10-22 12:30 P.M",
  "Depart":"03-10-22 01:30 P.M",
  "Parking_fee":"500",
   "status":"Not Paid"
}])
const handleSubmit = (e) => {
  const formData = new FormData(e.currentTarget)
  e.preventDefault();
const temp =data[data.length-1].no
let results = {'no':temp+1}



  for( let [key, value] of formData.entries()){

//  results.push({
//       key: key,
//       value:value
//     })
results[key]=value
  }

//  results.no=data[-1].no+1   
let temp2= data
temp2.push(results)

setData(temp2);
console.log(temp2)
console.log(data)
settoggle(true)
setmodal(!modal)
}
  
  return (
    <div >
      <Header/>
       <Navmenu/>
      <div className="ParkingText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Parking
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
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
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Parking</button>
          <div className="space"></div>
        </div>
      <ParkingTables data={data}/>
      </div>
      
     
    </div>
  )
}
