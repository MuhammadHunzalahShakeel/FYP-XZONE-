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
import Appointment from './components/Appointment/Appointment';
import Table from "./components/Table/Table";


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/shop" element={<Shops/>} />
          <Route path="/staff" element={<Staff/>} />
          <Route path="/ads" element={<Ads/>} />
          <Route path="/parking" element={<Parking/>} />
          <Route path="/emergency" element={<Emergency/>} />
          <Route path="/customer" element={<Customer/>} />
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
//       <Header/>
//       <Appointment title='Shops'/>
//       <Table/>
//     </div>
  
//   );
// }

// export default App;
