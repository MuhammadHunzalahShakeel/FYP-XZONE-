import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import AdvertismentTables from './AdvertismentTables.jsx';
import './Advertisment.css'
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";


export default function Advertisment(props) {
  const postURL = "http://18.222.182.9:5000/api/advertisements/admin";
  const getURL = "http://18.222.182.9:5000/api/advertisements/admin";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({shopname: '',cattegory: '', instructions: '' ,link:''})
  const[modal,setmodal]=useState(false)

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
      toast.success("New Advertisment Added!!",{theme: "light"});
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
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}} onClick={()=>setmodal(false)}>Cancel</button>
                </form> 
          
                
            </ModalBody>
            
          </Modal>
          
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Ads</button>
          <div className="space"></div>
        </div>
        <ToastContainer />
        <AdvertismentTables data={apidata}/>
      </div>

    </div>
    
  )
}
