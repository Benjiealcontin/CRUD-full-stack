import axios from 'axios';
import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from './Pages/Adduser';

import UpdateUser from './Pages/UpdateUser';
import DeleteUser from './Pages/DeleteUser';
import Home from './Pages/Home';
import Show from './Pages/Show';
import View from './Components/View';
import EditUser from './Components/EditUser';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/showdata" element={<Show />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/viewuser/:id" element={<View />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
