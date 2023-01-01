import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import ProfileImage from "../../assets/ProfileImage.svg"
import './Profile.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'

export default function Profile(props) {
    const[modal,setmodal]=useState(false);
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
                <form action="">
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Name'
                        name='name'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Email Address
                        </label>
                        <input
                        type='email'
                        className='form-control'
                        placeholder='Enter Email Address'
                        name='email'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Password
                        </label>
                        <input
                        type='password'
                        className='form-control'
                        placeholder='Enter Password'
                        name='password'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Confirm Password
                        </label>
                        <input
                        type='password'
                        className='form-control'
                        placeholder='Enter Confirm Password'
                        name='confirmpassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor="img">Select image:</label>
                        <input type="file" className='form-control' id="img" name="profileimg" accept="image/*"></input>
                      </div>
                     
                    </Col>
                  </Row>
                </form> 
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}}>Save</button>
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
                        <span>Ad-101</span>
                    </div>
                    <div className="inline">
                        <span className='Label'>Email Address:</span>
                        <span>admin@gmail.com</span>
                    </div>
                    <div className="inline">
                        <span className='Label'>Name:</span>
                        <span>Admin</span>
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

