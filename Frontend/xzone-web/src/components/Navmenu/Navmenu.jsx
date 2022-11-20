import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './Navmenu.css'
import Logo from "../../assets/Logo.svg"
import AdvertismentNavMenu from "../../assets/AdvertismentNavMenu.svg"
import ShopNavMenu from "../../assets/ShopNavMenu.svg"
import ParkingNavMenu from "../../assets/ParkingNavMenu.svg"
import StaffNavMenu from "../../assets/StaffNavMenu.svg"
import Entertainment from "../../assets/Entertainment.svg"
import EmergencyNavMenu from "../../assets/EmergencyNavMenu.svg"
import CustomerNavMenu from "../../assets/CustomerNavMenu.svg"

export default function Navmenu() {
  return (
      <div className='Navmenu'>
        <div id='navimage'>
          {/* <Link to='/advertisment'>
          <img className='Advertisment'          src={AdvertismentNavMenu} alt="Logo Image"></img>  

          </Link>
          <img className='Shop'                 src={ShopNavMenu} alt="Logo Image"></img>  
          <img className='Parking'              src={ParkingNavMenu} alt="Logo Image"></img>  
          <img className='Staff'                src={StaffNavMenu} alt="Logo Image"></img>  
          <img className='Entertainment'        src={Entertainment} alt="Logo Image"></img>  
         
          <img className='Customer'             src={CustomerNavMenu} alt="Logo Image"></img>  */}
          <Link to="/advertisment" ><img className='Advertisment'         src={AdvertismentNavMenu} ></img></Link>
          <Link to="/shops" ><img className='Shop'                 src={ShopNavMenu} ></img> </Link>
          <Link to="/parking" ><img className='Parking'              src={ParkingNavMenu} ></img></Link>
          <Link to="/staff" ><img className='Staff'                src={StaffNavMenu} ></img>  </Link>
          <Link to="/entertainment" ><img className='Entertainment'  src={Entertainment} ></img></Link>
          <Link to="/customer" ><img className='Customer'  src={CustomerNavMenu} ></img></Link> 
        </div>
    </div>  
  )
}



// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from './NavbarElements';



// const Navmenu = () => {
//   return (
//     <>
//       <Nav>
//         <Bars />
  
//         <NavMenu>
//           <NavLink to='/about' activeStyle>
//             About
//           </NavLink>
//           <NavLink to='/events' activeStyle>
//             Events
//           </NavLink>
//           <NavLink to='/annual' activeStyle>
//             Annual Report
//           </NavLink>
//           <NavLink to='/team' activeStyle>
//             Teams
//           </NavLink>
//           <NavLink to='/blogs' activeStyle>
//             Blogs
//           </NavLink>
//           <NavLink to='/sign-up' activeStyle>
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };
  
// export default Navmenu;





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
