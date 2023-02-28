import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Parking.css'
import { useNavigate } from "react-router-dom";
import ParkingTables from './ParkingTables.jsx';
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";


export default function Parking(props) {
  const postURL = "http://localhost:5000/api/parking";
  const getURL = "http://localhost:5000/api/parking";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({carNumber: '',fees:'',status:''})
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

useEffect(()=>{
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "token":localStorage.getItem("token")
    }
  };
  axios.get(getURL,axiosConfig).then((response)=>{
    console.log(response.data)
    setapidata(response.data)
  })
},[]);
const navigate = useNavigate();
  const handleChange = (e) => {
    if ( e.target.name === 'carNumber'){
      storeapidata({ ...storedata, carNumber: e.target.value }) ;
    }

    else if ( e.target.name === 'parkingfee'){
      storeapidata({ ...storedata, fees: e.target.value }) ;
    }
    else if ( e.target.name === 'status'){
      storeapidata({ ...storedata, status: e.target.value }) ;
    }

}

// const handleSubmit = (e) => {
//   const formData = new FormData(e.currentTarget)
//   e.preventDefault();
// const temp =data[data.length-1].no
// let results = {'no':temp+1}



//   for( let [key, value] of formData.entries()){

// //  results.push({
// //       key: key,
// //       value:value
// //     })
// results[key]=value
//   }

// //  results.no=data[-1].no+1   
// let temp2= data
// temp2.push(results)

// setData(temp2);
// console.log(temp2)
// console.log(data)
// settoggle(true)
// setmodal(!modal)
// }
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // await login({ variables: { email: loginData.email, password: loginData.password } });
    console.log(storedata)
    
    // console.log(error, '123123')
    // console.log(loading)
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "token":localStorage.getItem("token")
      }
    };
    axios
    .post(postURL, storedata,axiosConfig)
    .then((response) => {if(response.status===200){
      console.log(response.data)
      navigate("/parking");
        window.location.reload();
    }
    else{
      console.log(response)
    }
});
}
    
  catch (error) {
    console.log(error.message)
}

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
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Car Number'
                        name='carNumber'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Parking Fee
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Parking Fee'
                        name='parkingfee'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Status
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Status'
                        name='status'>
                        </input>
                      </div>
                    </Col>
                  </Row>
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} type="submit">Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                </form> 
            </ModalBody>
          </Modal>
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Parking</button>
          <div className="space"></div>
        </div>
      <ParkingTables data={apidata}/>
      </div>
      
     
    </div>
  )
}
