import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Entertainment.css'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import EntertainmentTables from './EntertainmentTables.jsx';
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";

export default function  Entertainment(props) {
  const postURL = "http://localhost:5000/api/FoodCourt";
  const getURL = "http://localhost:5000/api/FoodCourt";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({Name: '',Email:'',Category:'',Description:'',Website:''})
    const[modal,setmodal]=useState(false)
    const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Food_no":"FC-001",
    "Brand_Name":"KFC",
    "Category":"Fast Food",
    "Description":"KFC is a Fast Food Shop",
    "Website":"www.kfc.com"
},{
  "no":2,
    "Food_no":"FC-002",
    "Brand_Name":"OPTP",
    "Category":"Fast Food",
    "Description":"OPTP is a Fast Food Shop",
    "Website":"www.optp.com"
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
    if ( e.target.name === 'brandName'){
      storeapidata({ ...storedata, Name: e.target.value }) ;
    }
    else if ( e.target.name === 'brandEmail'){
      storeapidata({ ...storedata,Email: e.target.value }) ;
    }
    else if ( e.target.name === 'category'){
      storeapidata({ ...storedata, Category: e.target.value }) ;
    }
    else if ( e.target.name === 'description'){
      storeapidata({ ...storedata, Description: e.target.value }) ;
    }
    else if ( e.target.name === 'website'){
      storeapidata({ ...storedata, Website: e.target.value }) ;
    }

}
// const handleSubmit = (e) => {
//   const formData = new FormData(e.currentTarget)
//   e.preventDefault();
// const temp =data[data.length-1].no
// let results = {'no':temp+1}



//   for( let [key, value] of formData.entries()){

// results[key]=value
//   }

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
      navigate("/entertainment");
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
      <div className=" EntertainmentText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Brand
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                     
                      <div>
                        <label htmlFor='oldPassword'>
                          Brand Name
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Name'
                        name='brandName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Brand Email
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Email'
                        name='brandEmail'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Category
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Category'
                        name='category'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Description
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Description'
                        name='description'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Website
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Website'
                        name='website'>
                        </input>
                      </div>
                    </Col>
                  </Row>
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}}  type="submit">Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                </form> 
                
            </ModalBody>
            
          </Modal>
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Brand</button>
          <div className="space"></div>
        </div>
        <EntertainmentTables data={apidata}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
    </div>
  )
}