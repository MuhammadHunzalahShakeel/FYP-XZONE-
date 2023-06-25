import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Shops.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import ShopsTables from './ShopsTables.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";


export default function Shops(props) {
  const postURL = "http://18.222.182.9:5000/api/shops";
  const getURL = "http://18.222.182.9:5000/api/shops/owner/web";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({shopName: '', owner:'',purpose:'',demand:'',floor:'',Area:'',status:''})
    const[modal,setmodal]=useState(false)
    
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
          navigate('/login')
  }
},[])

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

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log(storedata)
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
      toast.success("New Shop Added!!",{theme: "light"});
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
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}} onClick={()=>setmodal(false)}>Cancel</button>
                </form> 
            </ModalBody>
          </Modal>
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Shop</button>
          <div className="space"></div>
        </div>
        <ToastContainer />
        <ShopsTables data={apidata}/>
      </div>
     
    </div>
  )
}
