import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const ParkingTables = (props) => {
    const[modal,setmodal]=useState(false);
    const[edit,setedit]=useState({carNumber: '',fees:'',status:''});
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
          navigate('/login')
      }
    }, [])
    const getCountries = async ()=>{
      try{
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              "token":localStorage.getItem("token")
          }
        };
        const response = await axios.get("http://localhost:5000/api/parking",axiosConfig).then((response)=>{
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
        name:"Car Number",
        selector: row=>row.carNumber,
      },
      {
        name:"Arrive At",
        selector: row=>row.ArrivedAt,
      },
      {
        name:"Depart",
        selector: row=>row.Depart,
      },
      {
        name:"Parking Fee",
        selector: row=>row.fees,
      },
      {
        name:"Status",
        selector: row=>row.status,
      },
      {
        name:"Action",
        cell:(row) =>(<button className='btn btn-primary' onClick={() => handleEdit(row)} >Edit</button>),
      },
      {
        cell:(row) =>(<button className='btn btn-danger' onClick={() => handleDelete(row.id)}>Delete</button>),
      }
    ]
    const navigate = useNavigate();
    const handleChange = (e) => {
      if ( e.target.name === 'carNumber'){
        setedit({ ...edit, carNumber: e.target.value }) ;
      }
  
      else if ( e.target.name === 'parkingfee'){
        setedit({ ...edit, fees: e.target.value }) ;
      }
      else if ( e.target.name === 'status'){
        setedit({ ...edit, status: e.target.value }) ;
      }
      console.log(edit)
  }
    const handleEdit = (row) =>{
      setedit(row);
      console.log(row)
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
      const response = axios.post("http://localhost:5000/api/parking/delete",{id:_id},axiosConfig).then((response)=> {if(response.status===200){
        
        navigate("/parking");
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
            return country.carNumber.toLowerCase().match(search.toLowerCase());
        })
        setFilteredCountries(result);
    },[search]);

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
        .post("http://localhost:5000/api/parking/edit", edit,axiosConfig)
        .then((response) => {if(response.status===200){
          console.log(response.data)
          navigate("/parking");
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
                        placeholder={edit.carNumber}
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
                        placeholder={edit.fees}
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
                        placeholder={edit.status}
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

export default ParkingTables
