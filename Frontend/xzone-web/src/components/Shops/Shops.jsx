import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Shops.css'
import ShopsTables from './ShopsTables.jsx';
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';


export default function Shops(props) {
    const[modal,setmodal]=useState(false)
    const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Shop_no":"XZS-101",
    "Shop_Name":"Khaadi",
    "Owner_Name":"Junaid",
    "Purpose":"Rent",
    "Demand":"100k",
    "Floor":1,
    "Status":"Not Available"
},{
  "no":1,
    "Shop_no":"XZS-102",
    "Shop_Name":"Mens",
    "Owner_Name":"Farooq",
    "Purpose":"Sell",
    "Demand":"50000k",
    "Floor":2,
    "Status":"Available"
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
       {/* <Navmenu/> */}
      <div className="ShopsText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Shop
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Shop Number
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Shop Number'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Shop Name
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
                          Owner Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Owner Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Purpose
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Purpose'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Demand
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Demand'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Floor
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Floor'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Area
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Area'
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
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Shop</button>
          <div className="space"></div>
        </div>
        <ShopsTables data={data}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
     
    </div>
  )
}
