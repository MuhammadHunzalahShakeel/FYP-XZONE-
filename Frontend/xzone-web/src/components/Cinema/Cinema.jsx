import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Cinema.css'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CinemaTables from './CinemaTables.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";

export default function  Cinema(props) {
  const postURL = "http://localhost:5000/api/cinema";
  const getURL = "http://localhost:5000/api/cinema";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({Name: '',Email:'',Description:'',Website:''})
    const[modal,setmodal]=useState(false)
    const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    no:1,
    Cinema_no:"XC-001",
    Cinema_Name:"Nueplex Cinema",
    Description:"Nueplex Cinema is a best cinema",
    Website:"www.nueplexcinema.com"
},{
  no:2,
    Cinema_no:"XC-002",
    Cinema_Name:"Saba Cinema",
    Description:"Saba Cinema is a best cinema",
    Website:"www.sabacinema.com"
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
  if ( e.target.name === 'cinemaName'){
    storeapidata({ ...storedata, Name: e.target.value }) ;
  }
  else if ( e.target.name === 'cinemaEmail'){
    storeapidata({ ...storedata,Email: e.target.value }) ;
  }
  else if ( e.target.name === 'description'){
    storeapidata({ ...storedata, Description: e.target.value }) ;
  }
  else if ( e.target.name === 'website'){
    storeapidata({ ...storedata, Website: e.target.value }) ;
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
      navigate("/cinema");
      toast.success("New Cinema Added!!",{theme: "light"});
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
      <div className=" CinemaText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Cinema
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                    
                      <div>
                        <label htmlFor='oldPassword'>
                          Cinema Name
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Cinema Name'
                        name='cinemaName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Cinema Email
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Cinema Email'
                        name='cinemaEmail'>
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
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} type="submit">Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}} onClick={()=>setmodal(false)}>Cancel</button>
                </form> 
                
            </ModalBody>
            
          </Modal>
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Cinema</button>
          {/* <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={onAddCinema}>Add Cinema</button> */}
          <div className="space"></div>
        </div>
        <ToastContainer />
        <CinemaTables  data={apidata}/>
      </div>
    </div>
  )
}