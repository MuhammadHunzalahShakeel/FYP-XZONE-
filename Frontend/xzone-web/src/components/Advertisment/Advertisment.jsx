import React,{useState} from 'react'
import {Modal,ModalHeader,ModalBody,Row,Col} from 'reactstrap'
import Button from '@mui/material/Button';
import Table from "../Table/Table.jsx";
import AdvertismentTables from './AdvertismentTables.jsx';
import './Advertisment.css'
import  { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes  from 'prop-types'
import Navmenu from '../Navmenu/Navmenu.jsx';
import Header from '../Header/Header.jsx';
import { useEffect } from 'react';


export default function Advertisment(props) {
  const[modal,setmodal]=useState(false)
  const[toggle,settoggle]=useState(false)
  const [data, setData] = useState([{
    "no":1,
    "Ad_no":"Ad_001",
    "Ads_shop":"Khaadi",
    "Ads_cat":"Women",
    "Instructions_shop":"No Instruction",
     "views":45
},{
  "no":2,
  "Ad_no":"Ad_002",
  "Ads_shop":"J.",
  "Ads_cat":"Men",
  "Instructions_shop":"No Instruction",
   "views":45
}])
  // useEffect(()=>{
  //   setData([{
  //     "no":1,
  //     "Ad_no":34,
  //     "Ads_shop":"adad",
  //     "Ads_cat":"adad",
  //     "Instructions_shop":"instructions",
  //     "views":34
  // },{
  //   "no":2,
  //   "Ad_no":44,
  //   "Ads_shop":"aad",
  //   "Ads_cat":"add",
  //   "Instructions_shop":"instruct",
  //    "views":45
  // }])
  // },[])
  // const theadData = ["Ads No.", "Ads Shop", "Ads Category", "Instructions", "View Ads", "Actions"];
  //   const tbodyData = [
  //       {
  //           id: "1",
  //           items: ["1", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "2",
  //           items: ["2", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "3",
  //           items: ["3", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "4",
  //           items: ["4", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "5",
  //           items: ["5", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "6",
  //           items: ["6", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "7",
  //           items: ["7", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "8",
  //           items: ["8", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "9",
  //           items: ["9", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //       {
  //           id: "10",
  //           items: ["10", "LIPID PANEL", "Fatima Bilal", "N/A", "N/A", ":"],
  //       },
  //   ];
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
      <div className="AdvertismentText">
        <h3>{props.title}</h3>
        
        <div>

          <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal) }>
            <ModalHeader toggle={()=>setmodal(!modal)}>
              Add New Ads
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
                        placeholder='Enter Shop Name'
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
                        placeholder='Enter Instruction'
                        name='Instructions_shop'>
                        </input>
                      </div>
                      <div>
                        <label htmlFor='oldPassword'>
                          View Ads
                        </label>
                        <input
                        type='text'
                        className='form-control'
                        placeholder='Enter Views'
                        name='views'>
                        </input>
                      </div>
                    </Col>
                  </Row>
                  <button className='btn mt-3' style={{backgroundColor:"#0F6AAB",color:"white"}} type="submit">Save</button>
                <button className='btn mt-3' style={{backgroundColor:"#FFFFFF",color:"#0F6AAB"}}>Cancel</button>
                </form> 
          
                
            </ModalBody>
            
          </Modal>
          
          {/* <input className='search' type="search" placeholder='search'/> */}
          <button className='btn mt-0' style={{backgroundColor:"#0F6AAB",color:"white"}} onClick={()=>setmodal(true)}>Add Ads</button>
          <div className="space"></div>
        </div>
        <AdvertismentTables data={data}/>
      </div>
      {/* <div className='Tablebackground'></div> */}
      {/* <div  className='ui'>
            <Table theadData={theadData} tbodyData={tbodyData} />
      </div> */}

    </div>
    
  )
}
