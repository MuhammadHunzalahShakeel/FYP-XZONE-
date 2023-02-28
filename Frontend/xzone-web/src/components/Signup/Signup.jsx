import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import './Signup.css'
import Signupimage from "../../assets/Signupimage.svg"
import Logo from "../../assets/Logo.svg"
import axios from "axios";

import { Link } from "react-router-dom";


export default function Signup() {
  const baseURL = "http://localhost:5000/api/auth/register/admin";
  const navigate = useNavigate();
  const [SignupData, setSignupData] = useState({ email: '', password: '' ,username:'',mallname:''})
  const handleChange = (e) => {
    // e.target.name === 'Signup-email' ? setSignupData({ ...SignupData, email: e.target.value }) : ; 
    // e.target.name === 'Signup-password' ? setSignupData({ ...SignupData, password: e.target.value })
    // e.target.name === 'Signup-username' ? setSignupData({ ...SignupData, username: e.target.value }) :
    // e.target.name === 'Signup-mallname' ? setSignupData({ ...SignupData, mallname: e.target.value })


    if ( e.target.name === 'Signup-email'){
      setSignupData({ ...SignupData, email: e.target.value }) ;
    }
    else if ( e.target.name === 'Signup-password'){
      setSignupData({ ...SignupData,  password: e.target.value }) ;
    }
    else if ( e.target.name === 'Signup-username'){
      setSignupData({ ...SignupData, username: e.target.value }) ;
    }
    else if ( e.target.name === 'Signup-mallname'){
      setSignupData({ ...SignupData, mallname: e.target.value }) ;
    }

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await Signup({ variables: { email: SignupData.email, password: SignupData.password } });
      console.log(SignupData)
      
      // console.log(error, '123123')
      // console.log(loading)
      axios
      .post(baseURL, SignupData)
      .then((response) => {if(response.status===200){
        console.log(response.data)
        navigate("/login");
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
    <div className="Signup">
        <div className="Signupleft">
                <div>
                <img src={Signupimage} className='Signup_image'  alt="Logo Image" ></img>  
                </div>
        </div>
        <div className="Signupright">
            <img src={Logo}  className='Logo' alt="Logo" ></img>
            <p>Welcome back</p>
            <h2>Signup to your account</h2>
            <form onSubmit={handleSubmit}>
              <div class="mb-4">
              <label  class="form-label">Email</label>
              <input type="email" class="form-control" name='Signup-email' onChange={handleChange} id="adminemail" placeholder="John.snow@gmail.com" />
              </div>
              <div class="mb-4">
              <label  class="form-label">Mall Name</label>
              <input type="text" class="form-control" name='Signup-mallname' onChange={handleChange} id="adminmall" placeholder="LuckyOne" />
              </div>
              <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">Password</label>
              <input type="password" name='Signup-password' onChange={handleChange} class="form-control" id="adminpassword" placeholder="*********" />
              </div>
              <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
              <input type="password" name='Signup-confirmpassword' onChange={handleChange} class="form-control" id="adminconfirmpassword" placeholder="*********" />
              </div>
              <div class="d-grid gap-2 col-3 mx-auto">
              {/* <button class="btn btn-primary" type="button"><Link to="/advertisment" className='Signupbutton'>Signup Now</Link></button> */}
              <button class="btn btn-primary" type="submit">Signup Now</button>
              </div>
              <div className="signin">Already have an account? <Link to="/login" className='linktosignin' >Log in</Link> </div>
            </form>
        </div>
    </div>
    
   
  )
}
