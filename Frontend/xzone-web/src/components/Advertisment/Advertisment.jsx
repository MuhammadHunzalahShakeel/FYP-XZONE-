import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import AdvertismentTables from './AdvertismentTables.jsx';
import './Advertisment.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";


export default function Advertisment(props) {
  const postURL = "http://localhost:5000/api/advertisements/admin";
  const getURL = "http://localhost:5000/api/advertisements/admin";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({shopname: '',cattegory: '', instructions: '' ,link:''})
  const[modal,setmodal]=useState(false)
  const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Ad_no":"Ad_001",
    "Ads_shop":"Khaadi",
    "Ads_cat":"Women",
    "Instructions_shop":"No Instruction",
     "Url":"www.image2.com"
},{
  "no":2,
  "Ad_no":"Ad_002",
  "Ads_shop":"J.",
  "Ads_cat":"Men",
  "Instructions_shop":"No Instruction",
   "Url":"www.image3.com"
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
//   const handleSubmit = (e) => {
//     const formData = new FormData(e.currentTarget)
//     e.preventDefault();
//   const temp =data[data.length-1].no
//  let results = {'no':temp+1}



//     for( let [key, value] of formData.entries()){

//   //  results.push({
//   //       key: key,
//   //       value:value
//   //     })
//   results[key]=value
//     }
  
//   //  results.no=data[-1].no+1   
//   let temp2= data
//   temp2.push(results)

//   setData(temp2);
//   console.log(temp2)
//   console.log(data)
//   settoggle(true)
//   setmodal(!modal)
//   }
const navigate = useNavigate();
  const handleChange = (e) => {
    // e.target.name === 'Signup-email' ? setSignupData({ ...SignupData, email: e.target.value }) : ; 
    // e.target.name === 'Signup-password' ? setSignupData({ ...SignupData, password: e.target.value })
    // e.target.name === 'Signup-username' ? setSignupData({ ...SignupData, username: e.target.value }) :
    // e.target.name === 'Signup-mallname' ? setSignupData({ ...SignupData, mallname: e.target.value })


    if ( e.target.name === 'Ads_shop'){
      storeapidata({ ...storedata, shopname: e.target.value }) ;
    }
    else if ( e.target.name === 'Ads_cat'){
      storeapidata({ ...storedata, cattegory: e.target.value }) ;
    }
    else if ( e.target.name === 'Instructions_shop'){
      storeapidata({ ...storedata, instructions: e.target.value }) ;
    }
    else if ( e.target.name === 'link'){
      storeapidata({ ...storedata, link: e.target.value }) ;
    }

  }
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
      navigate("/advertisment");
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
    <div>
      <Header/>
       {/* <Navmenu/> */}
      <div className="AdvertismentText">
        <h3>{props.title}</h3>
        
        <div>

          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal) }>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add New Ads
            </ModalHeader>
            <ModalBody> 
                <form  onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Ads Shop
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Shop Name'
                        name='Ads_shop'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Ads Category
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Ads Category'
                        name='Ads_cat'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Instruction
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Instruction'
                        name='Instructions_shop'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Ads Link
                        </label>
                        <input
                        type='text'
                        onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Ads Link'
                        name='link'>
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
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Ads</button>
          <div className="space"></div>
        </div>
        <AdvertismentTables data={apidata}/>
      </div>
      {/* <div className='Tablebackground'></div> */}
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}

    </div>
    
  )
}
