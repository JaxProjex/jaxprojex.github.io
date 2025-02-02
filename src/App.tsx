import React from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Qa from "./Components/Qa";
import Projex from "./Components/Projex";


function App() {
  return (
        <Router>
            <Routes>
                {/*<Route path='/' element={<Home/>} />*/}
                <Route path='/' element={<Projex/>} />
                <Route path='/projex' element={<Projex/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/qa' element={<Qa/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </Router>
  );
}

export default App;
