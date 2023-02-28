import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import './Shops.css'
import { useNavigate } from "react-router-dom";
import ShopsTables from './ShopsTables.jsx';
import Table from "../Table/Table.jsx";
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";


export default function Shops(props) {
  const postURL = "http://localhost:5000/api/shops";
  const getURL = "http://localhost:5000/api/shops";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({shopName: '', owner:'',purpose:'',demand:'',floor:'',Area:'',status:''})
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
  "no":2,
    "Shop_no":"XZS-102",
    "Shop_Name":"Mens",
    "Owner_Name":"Farooq",
    "Purpose":"Sell",
    "Demand":"50000k",
    "Floor":2,
    "Status":"Available"
},{
  "no":3,
    "Shop_no":"XZS-103",
    "Shop_Name":"Mens",
    "Owner_Name":"Fahad",
    "Purpose":"Sell",
    "Demand":"70000k",
    "Floor":2,
    "Status":"Available"
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
    if ( e.target.name === 'shopName'){
      storeapidata({ ...storedata, shopName: e.target.value }) ;
    }
    else if ( e.target.name === 'ownerName'){
      storeapidata({ ...storedata, owner: e.target.value }) ;
    }
    else if ( e.target.name === 'purpose'){
      storeapidata({ ...storedata, purpose: e.target.value }) ;
    }
    else if ( e.target.name === 'demand'){
      storeapidata({ ...storedata, demand: e.target.value }) ;
    }
    else if ( e.target.name === 'floor'){
      storeapidata({ ...storedata, floor: e.target.value }) ;
    }
    else if ( e.target.name === 'area'){
      storeapidata({ ...storedata, Area: e.target.value }) ;
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
      navigate("/shops");
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
                        <label htmlFor='oldPassword'>
                          Shop Name
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Shop Name'
                        name='shopName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Owner Name
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Owner Name'
                        name='ownerName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Purpose
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Purpose'
                        name='purpose'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Demand
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Demand'
                        name='demand'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Floor
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Floor'
                        name='floor'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Area
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Area'
                        name='area'>
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
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Shop</button>
          <div className="space"></div>
        </div>
        <ShopsTables data={apidata}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
     
    </div>
  )
}
