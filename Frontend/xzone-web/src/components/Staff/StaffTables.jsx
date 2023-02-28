import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const StaffTables = (props) => {
    const[modal,setmodal]=useState(false);
    const[edit,setedit]=useState({fullName: '',Email:'',gender:'',age:'',salary:'',designation:''});
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);

    const getCountries = async ()=>{
      try{
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              "token":localStorage.getItem("token")
          }
        };
        const response = await axios.get("http://localhost:5000/api/staff",axiosConfig).then((response)=>{
          console.log(response.data);
          // setapidata(response.data)};
          setCountries(response.data);
          setFilteredCountries(response.data);
      }
          );
      }catch(error){
        console.log(error);
      }
    };
    // <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
    //         <ModalHeader toggle={()=>setmodal(!modal)}>
    //           Edit Profile
    //         </ModalHeader>
    //         <ModalBody> 
    //             <form action="">
    //               <Row>
    //                 <Col lg={12}>
    //                   <div>
    //                     <label htmlFor="">
    //                       Name
    //                     </label>
    //                     <input
    //                     type='text'
    //                     className='form-control'
    //                     placeholder='Enter Name'
    //                     name='name'>
    //                   </input>
    //                   </div>
    //                   <div>
    //                     <label htmlFor='oldPassword'>
    //                       Email Address
    //                     </label>
    //                     <input
    //                     type='email'
    //                     className='form-control'
    //                     placeholder='Enter Email Address'
    //                     name='email'>
    //                     </input>
    //                   </div>
    //                   <div>
    //                     <label htmlFor='oldPassword'>
    //                       Password
    //                     </label>
    //                     <input
    //                     type='password'
    //                     className='form-control'
    //                     placeholder='Enter Password'
    //                     name='password'>
    //                     </input>
    //                   </div>
    //                   <div>
    //                     <label htmlFor='oldPassword'>
    //                       Confirm Password
    //                     </label>
    //                     <input
    //                     type='password'
    //                     className='form-control'
    //                     placeholder='Enter Confirm Password'
    //                     name='confirmpassword'>
    //                     </input>
    //                   </div>
    //                   <div>
    //                     <label htmlFor="img">Select image:</label>
    //                     <input type="file" className='form-control' id="img" name="profileimg" accept="image/*"></input>
    //                   </div>
                     
    //                 </Col>
    //               </Row>
    //             </form> 
    //             <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}}>Save</button>
    //             <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                
    //         </ModalBody>
            
    // </Modal>
    const columns=[
      {
        name:"No",
        selector: row=>row.id,
      },
      {
        name:"Staff No",
        selector: row=>row.id,
      },
      {
        name:"Name",
        selector: row=>row.fullName,
      },
      {
        name:"Gender",
        selector: row=>row.gender,
      },
      {
        name:"Age",
        selector: row=>row.age,
      },
      {
        name:"Email",
        selector: row=>row.Email,
      },
      {
        name:"Salary",
        selector: row=>row.salary,
      },
      {
        name:"Designation",
        selector: row=>row.designation,
      },
      {
        name:"Action",
        cell:(row) =>(<button className='btn btn-primary'  onClick={() => handleEdit(row)} >Edit</button>),
      },
      {
        cell:(row) =>(<button className='btn btn-danger' onClick={() => handleDelete(row.id)} >Delete</button>),
      }
    ]
    const navigate = useNavigate();
    const handleEdit = (row) =>{
      setedit(row);
      console.log(row)
      // return(<editAdvertisment row></editAdvertisment>)
      
      // console.log(edit);
      setmodal(true);
    }
    const handleDelete = (_id) => {
      // setData(data.filter((row) => row.id !== id));
      console.log(_id);
      try{
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              "token":localStorage.getItem("token")
          }
        };
      const response = axios.post("http://localhost:5000/api/staff/delete",{id:_id},axiosConfig).then((response)=> {if(response.status===200){
        
        navigate("/staff");
        window.location.reload();
      }
      else{
        console.log(response)
      }
  });
}catch(error){
  console.log(error)
}}
    useEffect(()=>{
      getCountries();
    },{});
    
    useEffect(()=>{
        const result = countries.filter(country=>{
            return country.name.toLowerCase().match(search.toLowerCase());
        })
        setFilteredCountries(result);
    },[search]);


  return (
    <div>
       <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Staff
            </ModalHeader>
            <ModalBody> 
                <form >
                  <Row>
                    <Col lg={12}>
                      
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Name
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Name'
                        value={edit.fullName}
                        name='staffName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Email
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Email'
                        value={edit.Email}
                        name='staffEmail'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Gender
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Gender'
                        value={edit.gender}
                        name='staffGender'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Age
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Staff Age'
                        value={edit.age}
                        name='staffAge'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Salary
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Salary'
                        value={edit.salary}
                        name='salary'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Designation
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange}
                        className='form-control'
                        placeholder='Enter Designation'
                        value={edit.designation}
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
      <DataTable 
          columns={columns}
          width='200px' 
          data={filteredCountries} 
          pagination
          fixedHeader
          fixedHeaderScrollHeight='350px'
          selectableRows
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
              <input type="text" placeholder='Search here' className='w-25 form-control' value={search} 
              onChange={(e)=>setSearch(e.target.value)}/>
          }
          subHeaderAlign='left'
      />
    </div>
  )
}

export default StaffTables
