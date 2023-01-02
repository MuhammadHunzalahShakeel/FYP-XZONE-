import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Entertainment.css'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import EntertainmentTables from './EntertainmentTables.jsx';
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function  Entertainment(props) {
    const[modal,setmodal]=useState(false)
    const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Food_no":"FC-001",
    "Brand_Name":"KFC",
    "Category":"Fast Food",
    "Description":"KFC is a Fast Food Shop",
    "Website":"www.kfc.com"
},{
  "no":2,
    "Food_no":"FC-002",
    "Brand_Name":"OPTP",
    "Category":"Fast Food",
    "Description":"OPTP is a Fast Food Shop",
    "Website":"www.optp.com"
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
      <div className=" EntertainmentText">
        <h3>{props.title}</h3>
        <div>
          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Brand
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                         Food Court No
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Food Court No'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Brand Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Category
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Category'
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
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Brand</button>
          <div className="space"></div>
        </div>
        <EntertainmentTables data={data}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
    </div>
  )
}