import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
            <Router>
                <Navbar/>
                <Routes>
                    <Route path ='/DigitalAgency' exact element={<Home/>}/>
                    <Route path='/DigitalAgency/aboutus' exact element={<AboutUs/>}/>
                    <Route path ='/DigitalAgency/services' exact element={<Services/>}/>
                    <Route path ='/DigitalAgency/contact' exact element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
    </div>
  );
}

export default App;



