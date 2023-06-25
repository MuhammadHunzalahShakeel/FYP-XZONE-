import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

const CinemaTables = (props) => {
    const[modal,setmodal]=useState(false);
    const[edit,setedit]=useState({Name: '',Email:'',Description:'',Website:''});
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
        const response = await axios.get("http://18.222.182.9:5000/api/cinema",axiosConfig).then((response)=>{
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
        name:"Cinema No",
        selector: row=>row.id,
      },
      {
        name:"Name",
        selector: row=>row.Name,
      },
      {
        name:"Email",
        selector: row=>row.Email,
      },
      {
        name:"Description",
        selector: row=>row.Description,
      },
      {
        name:"Website",
        selector: row=>row.Website,
      },
      {
        name:"Action",
        cell:(row) =>(<button className='btn btn-primary' onClick={() => handleEdit(row)}>Edit</button>),
      },
      {
        cell:(row) =>(<button className='btn btn-danger' onClick={() => handleDelete(row.id)}>Delete</button>),
      }
    ]
    const navigate = useNavigate();
    const handleChange = (e) => {
      if ( e.target.name === 'cinemaName'){
        setedit({ ...edit, Name: e.target.value }) ;
      }
      else if ( e.target.name === 'cinemaEmail'){
        setedit({ ...edit,Email: e.target.value }) ;
      }
      else if ( e.target.name === 'description'){
        setedit({ ...edit, Description: e.target.value }) ;
      }
      else if ( e.target.name === 'website'){
        setedit({ ...edit, Website: e.target.value }) ;
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
      const response = axios.post("http://18.222.182.9:5000/api/cinema/delete",{id:_id},axiosConfig).then((response)=> {if(response.status===200){
        
        navigate("/cinema");
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
            return country.Name.toLowerCase().match(search.toLowerCase());
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
        .post("http://18.222.182.9:5000/api/cinema/edit", edit,axiosConfig)
        .then((response) => {if(response.status===200){
          console.log(response.data)
          navigate("/cinema");
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
              Edit Cinema
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                    
                      <div>
                        <label htmlFor='oldPassword'>
                          Cinema Name
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder={edit.Name}
                        name='cinemaName'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Cinema Email
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder={edit.Email}
                        name='cinemaEmail'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Description
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder={edit.Description}
                        name='description'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Website
                        </label>
                        <input
                        type='text'
                        onChange={handleChange}
                        className='form-control'
                        placeholder={edit.Website}
                        name='website'>
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

export default CinemaTables
