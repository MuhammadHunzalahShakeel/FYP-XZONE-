import React from 'react'
import {Link} from 'react-router-dom';
import './Navmenu.css'
import AdvertismentNavMenu from "../../assets/AdvertismentNavMenu.svg"
import ShopNavMenu from "../../assets/ShopNavMenu.svg"
import CinemaNavMenu from "../../assets/CinemaNavMenu.svg"
import ParkingNavMenu from "../../assets/ParkingNavMenu.svg"
import StaffNavMenu from "../../assets/StaffNavMenu.svg"
import Entertainment from "../../assets/Entertainment.svg"

export default function Navmenu() {
  return (
      <div className='Navmenu'>
        <div className='navlink'>
          <Link to="/advertisment" ><img className='Advertisment' id='Navmenuicon' alt=''       src={AdvertismentNavMenu} ></img></Link>
          <Link to="/shops" ><img className='Shop' id='Navmenuicon'    alt=''            src={ShopNavMenu} ></img> </Link>
          <Link to="/parking" ><img className='Parking' id='Navmenuicon' alt=''             src={ParkingNavMenu} ></img></Link>
          <Link to="/staff" ><img className='Staff'   id='Navmenuicon' alt=''            src={StaffNavMenu} ></img>  </Link>
          <Link to="/entertainment" ><img className='Entertainment' alt='' id='Navmenuicon'  src={Entertainment} ></img></Link>
          <Link to="/cinema" ><img className='Cinema' id='Navmenuicon' alt=''  src={CinemaNavMenu} ></img></Link>
          {/* <Link to="/customer" ><img className='Customer' id='Navmenuicon' src={CustomerNavMenu} ></img></Link>  */}
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
