import axios from 'axios';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
const AdvertismentTables = (props) => {
    const[modal,setmodal]=useState(false);
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);
    
    const data=[{
      "no":1,
      "Ad_no":34,
      "Ads_shop":"adad",
      "Ads_cat":"adad",
      "Instructions_shop":"instructions",
      "views":34
  },{
    "no":2,
    "Ad_no":44,
    "Ads_shop":"aad",
    "Ads_cat":"add",
    "Instructions_shop":"instruct",
    "views":45
}];
    const getCountries = async ()=>{
      try{
        const response = await axios.get("https://restcountries.com/v2/all");
        
        setCountries(props.data);
        console.log(typeof(props.data));
        console.log(typeof(response.data));
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
        name:"Ads No",
        selector: row=>row.Ad_no,
      },
      {
        name:"Ads Shop",
        selector: row=>row.Ads_shop,
      },
      {
        name:"Ads Category",
        selector: row=>row.Ads_cat,
      },
      {
        name:"Instructions",
        selector: row=>row.Instructions_shop,
      },
      {
        name:"View Ads",
        selector: row=>row.views,
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
    },[]);
    
    useEffect(()=>{
        const result = countries.filter(country=>{
            return country.Ads_shop.toLowerCase().match(search.toLowerCase());
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

export default AdvertismentTables
