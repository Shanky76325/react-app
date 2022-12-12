import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shankyproject from './ReacTest/Shankyproject';
import Newproject from './ReacTest/Newproject';
import Neon from './ReacTest/Neon';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Shankyproject" element={<Shankyproject/>}/> */}
        <Route path="/Newproject" element={<Newproject/>}/>
        <Route path="/Neon" element={<Neon/>}/>


          
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
