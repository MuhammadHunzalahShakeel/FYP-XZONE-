import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './Navmenu.css'
import Logo from "../../assets/Logo.svg"
import AdvertismentNavMenu from "../../assets/AdvertismentNavMenu.svg"
import ShopNavMenu from "../../assets/ShopNavMenu.svg"
import ParkingNavMenu from "../../assets/ParkingNavMenu.svg"
import StaffNavMenu from "../../assets/StaffNavMenu.svg"
import EmergencyNavMenu from "../../assets/EmergencyNavMenu.svg"
import CustomerNavMenu from "../../assets/CustomerNavMenu.svg"
export default function Navmenu() {
  return (
      <div className='Navmenu'>
        <div id='navimage'>
        
          <img className='Advertisment'         src={AdvertismentNavMenu} alt="Logo Image"></img>  
          <img className='Shop'                 src={ShopNavMenu} alt="Logo Image"></img>  
          <img className='Parking'              src={ParkingNavMenu} alt="Logo Image"></img>  
          <img className='Staff'                src={StaffNavMenu} alt="Logo Image"></img>  
          <img className='Emergency'            src={EmergencyNavMenu} alt="Logo Image"></img>  
          <img className='Customer'             src={CustomerNavMenu} alt="Logo Image"></img> 
          {/* <Link to="/Advertisment" ><img className='Advertisment'         src={AdvertismentNavMenu} ></img></Link>
          <Link to="/Shop" ><img className='Shop'                 src={ShopNavMenu} ></img> </Link>
          <Link to="/Parking" ><img className='Parking'              src={ParkingNavMenu} ></img></Link>
          <Link to="/Staff" ><img className='Staff'                src={StaffNavMenu} ></img>  </Link>
          <Link to="/Emergency" ><img className='Emergency'            src={EmergencyNavMenu} ></img></Link>
          <Link to="/Customer" ><img className='Customer' src={CustomerNavMenu} ></img></Link>  */}
        </div>
    </div>  
  )
}





// export default function Navmenu() {
//   return (
//     <Router>
//       <div className='Navmenu'>
//           <Link to="/advertisment"><img id='navimage' className='Advertisment'  src={AdvertismentNavMenu}/></Link>
//           <Link to="/shop"><img id='navimage' className='Shop'   src={ShopNavMenu}/></Link>
//           <Link to="/parking"><img id='navimage' className='Parking' src={ParkingNavMenu}/></Link>
//           <Link to="/staff"><img id='navimage' className='Staff'  src={StaffNavMenu}/></Link>
//           <Link to="/emergency"><img id='navimage' className='Emergency' src={EmergencyNavMenu}/></Link>
//           <Link to="/customer"><img id='navimage' className='Customer' src={CustomerNavMenu}/></Link>
//       </div>
//     </Router>
//   );
// }
