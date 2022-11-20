import React from "react";
import {BrowserRouter, Routes,Route,Router,Link,Navlink,Switch } from "react-router-dom"
import './App.css';
import Login from './components/Login/Login';
import Shops from './components/Shops/Shops';
import Staff from './components/Staff/Staff';
import Ads from './components/Ads/Ads';
import Parking from './components/Parking/Parking';
import Emergency from './components/Emergency/Emergency';
import Customer from './components/Customer/Customer';
import Navmenu from './components/Navmenu/Navmenu';
import Entertainment from './components/Entertainment/Entertainment';
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
      // <Router>
      //   <Link></Link>
      //   <Navlink exact activeClassName="active" to="/">Home Navlink</Navlink>
      //   <Navlink exact activeClassName="active" to="/about">About</Navlink>
      //   <Navlink exact activeClassName="active" to="/about/1">About 1</Navlink>
      //   <Navlink exact activeClassName="active" to="/about/2">About 2</Navlink>
      //   <Navlink exact activeClassName="active" to="/about/3">About 3</Navlink>
      //   <Navlink exact activeClassName="active" to="/contact">contact</Navlink>
        
      //   <Switch>
      //     <Route exact path="/" component={advertisment} />
      //     <Route exact path="/about/:id?" component={advertisment} />
      //     <Route exact path="/contact" component={advertisment} />
      //     <Route exact path="/login" component={advertisment} />
      //   </Switch>
      // </Router>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayout/>}>
              <Route path="/advertisment" element={<Advertisment title='Advertisment'/>} />
              <Route path="/shops" element={<Shops title='Shops' />} />
              <Route path="/parking" element={<Parking title='Parking'/>} />
              <Route path="/staff" element={<Staff title='Staff'/>} />
              <Route path="/entertainment" element={<Entertainment title='Food Court'/>} />
              <Route path="/customer" element={<Customer title='Customer' />} />
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
