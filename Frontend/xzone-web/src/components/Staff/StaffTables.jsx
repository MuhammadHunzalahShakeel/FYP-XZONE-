import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const StaffTables = (props) => {
    const[modal,setmodal]=useState(false);
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
        cell:(row) =>(<button className='btn btn-primary' onClick={()=>setmodal(true)} >Edit</button>),
      },
      {
        cell:(row) =>(<button className='btn btn-danger' onClick={() => handleDelete(row.id)} >Delete</button>),
      }
    ]
    const navigate = useNavigate();
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
        <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal) }>
    <ModalHeader toggle={()=>setmodal(!modal)}>
      Edit Staff
    </ModalHeader>
    <ModalBody> 
        <form  >
          <Row>
            <Col lg={12}>
              <div>
                <label htmlFor="">
                  Ads Shop
                </label>
                <input
                type='text'
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
                className='form-control'
                placeholder='Enter Ads Link'
                name='link'>
                </input>
              </div>
            </Col>
          </Row>
          <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} >Save</button>
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
