import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const ShopsTables = (props) => {
    const[modal,setmodal]=useState(false);
    const[edit,setedit]=useState({shopName: '', owner:'',purpose:'',demand:'',floor:'',Area:'',status:''});
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [data,setData]= useState([]);
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
        const response = await axios.get("http://localhost:5000/api/shops",axiosConfig).then((response)=>{
          console.log(response.data);
          // setapidata(response.data)};
          setCountries(response.data);
          setFilteredCountries(response.data);
      }
          );
        
        // console.log(typeof(props.data));
        // console.log(typeof(response.data));
        // console.log(props)
      }catch(error){
        console.log(error);
      }
    };
    
    const columns=[
      {
        name:"No",
        selector: row=>row.id,
      },
      {
        name:"Shop No",
        selector: row=>row.id,
      },
      {
        name:"Shop Name",
        selector: row=>row.shopName,
      },
      {
        name:"Owner Name",
        selector: row=>row.owner,
      },
      {
        name:"Purpose",
        selector: row=>row.purpose,
      },
      {
        name:"Demand",
        selector: row=>row.demand,
      },
      {
        name:"Floor",
        selector: row=>row.floor,
      },
      {
        name:"Status",
        selector: row=>row.status,
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
      const response = axios.post("http://localhost:5000/api/shops/delete",{id:_id},axiosConfig).then((response)=> {if(response.status===200){
        
        navigate("/shops");
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
              Add Shop
            </ModalHeader>
            <ModalBody> 
                <form >
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor='oldPassword'>
                          Shop Name
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Shop Name'
                        value={edit.shopName}
                        name='shopName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Owner Name
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Owner Name'
                        value={edit.owner}
                        name='ownerName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Purpose
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Purpose'
                        value={edit.purpose}
                        name='purpose'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Demand
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Demand'
                        value={edit.demand}
                        name='demand'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Floor
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Floor'
                        value={edit.floor}
                        name='floor'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Area
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Area'
                        value={edit.Area}
                        name='area'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Status
                        </label>
                        <input
                        type='text'
                        // onChange={handleChange} 
                        className='form-control'
                        placeholder='Enter Status'
                        value={edit.status}
                        name='status'>
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

export default ShopsTables
