import React from "react";
import './App.css';
import Login from './components/Login/Login';
import Navmenu from './components/Navmenu/Navmenu';
import Header from './components/Header/Header';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Navmenu/>
      <Header/> */}
      <Appointment/>
    </div>
  
  );
}

export default App;
