import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import DataTable from 'react-data-table-component';

const AdvertismentTables = (props) => {
    const[modal,setmodal]=useState(false);
    const[edit,setedit]=useState({shopname: '',cattegory: '', instructions: '' ,link:''});
    const [search,setSearch]= useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);
    
    const _delete=(id)=>{
      console.log(id)
    }
    const getCountries = async ()=>{
      try{
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
              "token":localStorage.getItem("token")
          }
        };
        const response = await axios.get("http://localhost:5000/api/advertisements/admin",axiosConfig).then((response)=>{
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
    
   
    
    
    const columns=[
      {
        name:"No",
        selector: row=>row.id,
      },
      {
        name:"Ads No",
        selector: row=>row.id,
      },
      {
        name:"Ads Shop",
        selector: row=>row.advertisedBy,
      },
      {
        name:"Ads Category",
        selector: row=>row.cattegory,
      },
      {
        name:"Instructions",
        selector: row=>row.instructions,
      },
      {
        name:"View Ads",
        selector: row=>row.link,
      },
      {
        name:"Action",
        cell:(row) =>(<button className='btn btn-primary' onClick={() => handleEdit(row)}>Edit</button>),
      },
      {
        // cell:(row) =>(<button className='btn btn-danger' id={row.id} onClick={_delete(row.id)} >Delete</button>),
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
      const response = axios.post("http://localhost:5000/api/advertisements/delete",{id:_id},axiosConfig).then((response)=> {if(response.status===200){
        
        navigate("/advertisement");
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
    },[]);
    
    useEffect(()=>{
        const result = countries.filter(country=>{
            return country.Ads_shop.toLowerCase().match(search.toLowerCase());
        })
        setFilteredCountries(result);
    },[search]);


  return (
  <div>

    <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal) }>
    <ModalHeader toggle={()=>setmodal(!modal)}>
      Edit Ads
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
                placeholder='hello'
                value={edit.advertisedBy}
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
                value={edit.cattegory}
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
                value={edit.instructions}
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
                value={edit.link}
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

export default AdvertismentTables
