import React from "react";
import {BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css';
import Login from './components/Login/Login';
import Shops from './components/Shops/Shops';
import Staff from './components/Staff/Staff';
import Ads from './components/Ads/Ads';
import Parking from './components/Parking/Parking';
import Emergency from './components/Emergency/Emergency';
import Customer from './components/Customer/Customer';
import Navmenu from './components/Navmenu/Navmenu';
import Header from './components/Header/Header';
import Advertisment from './components/Advertisment/Advertisment';
import Table from "./components/Table/Table";
import { Outlet } from 'react-router-dom';


const NavLayout = () => (
  <>
    <Navmenu />
    <Outlet />
  </>
);

const App = () => {
  return (
      // <Navmenu/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout/>}>
              <Route path="/shop" element={<Shops title='Shops' />} />
              <Route path="/staff" element={<Staff title='Staff'/>} />
              <Route path="/parking" element={<Parking title='Parking'/>} />
              <Route path="/emergency" element={<Emergency title='Emergency' />} />
              <Route path="/customer" element={<Customer title='Customer Care' />} />
              <Route path="/advertisment" element={<Advertisment title='Advertisment'/>} />
          </Route>
          <Route>
              <Route path="/login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App



// function App() {
//   return (
//     <div className="App">
//       {/* <Login/> */}
//       <Navmenu/>
//       {/* <Staff/> */}
//       <Advertisment title='Advertisment'/>
//       {/* <Header/>
//       <Table/> */}
//       {/* <Emergency/> */}
//     </div>
  
//   );
// }

// export default App;
