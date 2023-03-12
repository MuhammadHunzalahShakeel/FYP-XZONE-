import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import ProfileImage from "../../assets/ProfileImage.svg"
import './Profile.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Profile(props) {
  const[modal,setmodal]=useState(false);
  const [profiledata,setprofiledata]=useState({id:'',Name:'',Email:''});
  const getURL = "http://localhost:5000/api/profile";
  const[edit,setedit]=useState({Name: '',Email: '', Password:''});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate('/login')
}
const temp = JSON.parse(localStorage.getItem('admin'))
// setprofiledata({...profiledata,Name:temp.Name})
// setprofiledata({...profiledata,Email:temp.Email})
// setprofiledata({...profiledata,Password:temp.Password})
setprofiledata(temp)
console.log(profiledata)
},[])
const navigate = useNavigate();
const handleChange = (e) => { 
  console.log(e.target.name,e.target.value)
  if ( e.target.name === 'Name'){
    setedit({ ...edit, Name: e.target.value }) ;
  }
  else if ( e.target.name === 'Email'){
    setedit({ ...edit, Email: e.target.value }) ;
  }
  else if ( e.target.name === 'Password'){
    setedit({ ...edit, Password: e.target.value }) ;
  }
  console.log(edit)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await login({ variables: { email: loginData.email, password: loginData.password } });
      console.log(edit)
      
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
      .post("http://localhost:5000/api/profile/edit", edit,axiosConfig)
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
       <Navmenu/>
       <div className="ProfileText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Edit Profile
            </ModalHeader>
            <ModalBody> 
                <form  onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder={edit.Name}
                        onChange={handleChange} 
                        name='Name'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Email Address
                        </label>
                        <input
                        type='email'
                        className='form-control'
                        placeholder={edit.email}
                        onChange={handleChange} 
                        name='Email'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Password
                        </label>
                        <input
                        type='password'
                        className='form-control'
                        placeholder={edit.password}
                        onChange={handleChange} 
                        name='Password'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Confirm Password
                        </label>
                        <input
                        type='password'
                        className='form-control'
                        placeholder={edit.confirm}
                        onChange={handleChange} 
                        name='confirmpassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor="img">Select image:</label>
                        <input type="file" className='form-control' id="img" name="profileimg" accept="image/*"
                        placeholder={edit.image}
                        onChange={handleChange} 
                        > 
                        </input>
                        
                      </div>
                     
                    </Col>
                  </Row>
                </form> 
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} type="submit">Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                
            </ModalBody>
            
          </Modal>
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Edit Profile</button>
          <div>
            <div class="row">
                <div class="column1">
                    <div class="card" id='img'><img className='profile' src={ProfileImage} alt="" /></div>
                </div>
                <div class="column2">
                    <div class="card">
                    <div className="inline" >
                        <span className='Label'>Id:</span>
                        <span>{profiledata.id}</span>
                    </div>
                    <div className="inline" >
                        <span className='Label'>Name:</span>
                        <span>{profiledata.Name}</span>
                    </div>
                    <div className="inline">
                        <span className='Label'>Email Address:</span>
                        <span>{profiledata.Email}</span>
                    </div>
                    <div className="inline">
                        <span className='Label'>Password:</span>
                        <span>*******</span>
                    </div>
                    </div>
                </div>
            </div>
            {/* <img className='profile' src={ProfileImage} alt="" />
            <div className="id">
                <span>Id:</span>
                <span>Ad-101</span>
            </div>
            <div className="id">
                <span>Email Address:</span>
                <span>admin@gmail.com</span>
            </div>
            <div className="id">
                <span>Name:</span>
                <span>Admin</span>
            </div>
            <div className="id">
                <span>Password:</span>
                <span>*******</span>
            </div> */}
            {/* <form>
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <label>
                    Email Address:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form> */}
            
          </div>
          
        </div>

       </div>
    </div>
  )
}

