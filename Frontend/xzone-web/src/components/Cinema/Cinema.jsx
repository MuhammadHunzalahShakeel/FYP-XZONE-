import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Cinema.css'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import CinemaTables from './CinemaTables.jsx';
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function  Cinema(props) {
    const[modal,setmodal]=useState(false)
    const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Cinema_no":"XC-001",
    "Cinema_Name":"Nueplex Cinema",
    "Description":"Nueplex Cinema is a best cinema",
    "Website":"www.nueplexcinema.com"
},{
  "no":1,
    "Cinema_no":"XC-002",
    "Cinema_Name":"Saba Cinema",
    "Description":"Saba Cinema is a best cinema",
    "Website":"www.sabacinema.com"
}])
const handleSubmit = (e) => {
  const formData = new FormData(e.currentTarget)
  e.preventDefault();
const temp =data[data.length-1].no
let results = {'no':temp+1}



  for( let [key, value] of formData.entries()){

results[key]=value
  }

let temp2= data
temp2.push(results)

setData(temp2);
console.log(temp2)
console.log(data)
settoggle(true)
setmodal(!modal)
}
  return (
    <div>
      <Header/>
      {/* <Navmenu/> */}
      <div className=" CinemaText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Cinema
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                         Cinema No
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Cinema No'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Cinema Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Cinema Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Description
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Description'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Website
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Website'
                        name='oldPassword'>
                        </input>
                      </div>
                    </Col>
                  </Row>
                </form> 
                <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}}>Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                
            </ModalBody>
            
          </Modal>
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Cinema</button>
          <div className="space"></div>
        </div>
        <CinemaTables data={data}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
    </div>
  )
}