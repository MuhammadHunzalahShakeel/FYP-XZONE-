import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Staff.css'
import { useNavigate } from "react-router-dom";
import StaffTables from './StaffTables.jsx';
import Table from "../Table/Table.jsx";
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';
import axios from "axios";

export default function Staff(props) {
  const postURL = "http://localhost:5000/api/staff";
  const getURL = "http://localhost:5000/api/staff";
  const [apidata,setapidata]=useState([]);
  const [storedata, storeapidata] = useState({fullName: '',Email:'',gender:'',age:'',salary:'',designation:''})
  const[modal,setmodal]=useState(false)
  const[toggle,settoggle]=useState(false)
 
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
  if ( e.target.name === 'staffName'){
    storeapidata({ ...storedata, fullName: e.target.value }) ;
  }
  else if ( e.target.name === 'staffEmail'){
    storeapidata({ ...storedata,Email: e.target.value }) ;
  }
  else if ( e.target.name === 'staffGender'){
    storeapidata({ ...storedata, gender: e.target.value }) ;
  }
  else if ( e.target.name === 'staffAge'){
    storeapidata({ ...storedata, age: e.target.value }) ;
  }
  else if ( e.target.name === 'salary'){
    storeapidata({ ...storedata, salary: e.target.value }) ;
  }
  else if ( e.target.name === 'designation'){
    storeapidata({ ...storedata, designation: e.target.value }) ;
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
      navigate("/staff");
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
      <div className="StaffText">
        <h3>{props.title}</h3>
        <div>
        <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Staff
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Name
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Name'
                        name='staffName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Email
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Email'
                        name='staffEmail'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Gender
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Gender'
                        name='staffGender'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Age
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Age'
                        name='staffAge'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Salary
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Salary'
                        name='salary'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Designation
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Designation'
                        name='designation'>
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
        <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Staff</button>
        <div className="space"></div>
        </div>
        <StaffTables data={apidata}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
    </div>
  )
}