import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import './Staff.css'
import StaffTables from './StaffTables.jsx';
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import { Link } from "react-router-dom";
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
export default function Staff(props) {
    const[modal,setmodal]=useState(false)
    const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Staff_no":"Xstaff-101",
    "Staff_Name":"Asim",
    "Staff_Gender":"Men",
    "Staff_Age":"30",
    "Salary":"20k",
    "Joining_Data":"12-12-21"
},{
  "no":2,
    "Staff_no":"Xstaff-102",
    "Staff_Name":"Saim",
    "Staff_Gender":"Men",
    "Staff_Age":"30",
    "Salary":"20k",
    "Joining_Data":"12-02-21"
}])
const handleSubmit = (e) => {
  const formData = new FormData(e.currentTarget)
  e.preventDefault();
const temp =data[data.length-1].no
let results = {'no':temp+1}



  for( let [key, value] of formData.entries()){

//  results.push({
//       key: key,
//       value:value
//     })
results[key]=value
  }

//  results.no=data[-1].no+1   
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
      <div className="StaffText">
        <h3>{props.title}</h3>
        <div>
        <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add Staff
            </ModalHeader>
            <ModalBody> 
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div>
                        <label htmlFor="">
                          Staff Number
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Number'
                        name='oldPassword'>
                      </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Name
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Name'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Gender
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Gender'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Staff Age
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Staff Age'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Salary
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Salary'
                        name='oldPassword'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          Joining Date
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Joining Date'
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
        <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Staff</button>
        <div className="space"></div>
        </div>
        <StaffTables data={data}/>
      </div>
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}
    </div>
  )
}