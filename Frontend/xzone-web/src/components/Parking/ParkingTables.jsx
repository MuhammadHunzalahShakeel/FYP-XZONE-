import axios from 'axios';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const ParkingTables = (props) => {
    const[modal,setmodal]=useState(false);
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);

    const getCountries = async ()=>{
      try{
        const response = await axios.get("https://restcountries.com/v2/all");
        setCountries(props.data);
        setFilteredCountries(props.data);
      }catch(error){
        console.log(error);
      }
    };
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
    const columns=[
      {
        name:"No",
        selector: row=>row.no,
      },
      {
        name:"Car Number",
        selector: row=>row.Car_no,
      },
      {
        name:"Arrive At",
        selector: row=>row.Arrive_at,
      },
      {
        name:"Depart",
        selector: row=>row.Depart,
      },
      {
        name:"Parking Fee",
        selector: row=>row.Parking_fee,
      },
      {
        name:"Status",
        selector: row=>row.status,
      },
      {
        name:"Action",
        cell:(row) =>(<button className='btn btn-primary' onClick={()=>setmodal(true)} >Edit</button>),
      },
      {
        cell:(row) =>(<button className='btn btn-danger' onClick={()=>alert(row.numericCode)} >Delete</button>),
      }
    ]
  
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
  )
}

export default ParkingTables
