import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import DataTable from 'react-data-table-component';

const AdvertismentTables = (props) => {
    const postURL = "http://localhost:5000/api/advertisements/edit";
    const[modal,setmodal]=useState(false);
    const[edit,setedit]=useState({advertisedBy: '',cattegory: '', instructions:'',link:''});
    const [search,setSearch]= useState([]);
    const [apidata,setapidata]=useState([]);
    const [countries,setCountries]= useState([]);
    const [filteredCountries,setFilteredCountries]= useState([]);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login')
        }
    }, [])
    
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
    const handleChange = (e) => { 
      console.log(e.target.name,e.target.value)
      if ( e.target.name === 'Ads_shop'){
        setedit({ ...edit, advertisedBy: e.target.value }) ;
      }
      else if ( e.target.name === 'Ads_cat'){
        setedit({ ...edit, cattegory: e.target.value }) ;
      }
      else if ( e.target.name === 'Instructions_shop'){
        setedit({ ...edit, instructions: e.target.value }) ;
      }
      else if ( e.target.name === 'link'){
        setedit({ ...edit, link: e.target.value }) ;
      }
      console.log(edit)
    }
    const handleEdit = (row) =>{
      setedit(row);
      console.log(row)
      setmodal(true);
      
        // setData(data.filter((row) => row.id !== id));
  //       console.log(row);
  //       try{
  //         let axiosConfig = {
  //           headers: {
  //               'Content-Type': 'application/json;charset=UTF-8',
  //               "Access-Control-Allow-Origin": "*",
  //               "token":localStorage.getItem("token")
  //           }
  //         };
  //       const response = axios.post("http://localhost:5000/api/advertisements/edit",{row:row},axiosConfig).then((response)=> {if(response.status===200){
          
  //         navigate("/advertisement");
  //         window.location.reload();
  //       }
  //       else{
  //         console.log(response)
  //       }
  //   });
  // }catch(error){
  //   console.log(error)
  // }
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
        
        navigate("/advertisment");
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
            return country.advertisedBy.toLowerCase().match(search.toLowerCase());
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
        .post("http://localhost:5000/api/advertisements/edit", edit,axiosConfig)
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

    <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal) }>
    <ModalHeader toggle={()=>setmodal(!modal)}>
      Edit Ads
    </ModalHeader>
    <ModalBody> 
        <form  onSubmit={handleSubmit}>
          <Row>
            <Col lg={12}>
              <div>
                <label htmlFor="">
                  Ads Shop
                </label>
                <input
                type='text'
                className='form-control'
                placeholder={edit.advertisedBy}
                onChange={handleChange} 
              
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
                placeholder={edit.cattegory}
                onChange={handleChange}
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
                placeholder={edit.instructions}
                onChange={handleChange}
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
                placeholder={edit.link}
                onChange={handleChange}
                name='link'>
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

export default AdvertismentTables
