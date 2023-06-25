import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Parking.css'
import { useNavigate } from "react-router-dom";
import ParkingTables from './ParkingTables.jsx';
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";


export default function Parking(props) {
  const postURL = "http://18.222.182.9:5000/api/parking";
  const getURL = "http://18.222.182.9:5000/api/parking";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({carNumber: '',fees:'',status:''})
  const[modal,setmodal]=useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate('/login')
    }
    }, [])

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
      navigate("/parking");
      toast.success("New Parking Added!!",{theme: "light"});
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
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}} onClick={()=>setmodal(false)}>Cancel</button>
                </form> 
            </ModalBody>
          </Modal>
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Parking</button>
          <div className="space"></div>
        </div>
        
        <ToastContainer />
      <ParkingTables data={apidata}/>
      </div>
      
     
    </div>
  )
}
