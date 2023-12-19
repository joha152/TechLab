import React from 'react'
import { Route, Routes } from 'react-router';
import Navbar from "./assets/Components/Navbar/Navbar"
import './App.css'
import Home from './assets/Components/Home/Home';
import Information from "./assets/Components/Information/Information";
import Price from "./assets/Components/Price/Price";
import Service from "./assets/Components/Service/Service"
import Login from './assets/Components/Login/Login';
import TestFree from './assets/Components/TestFree/TestFree';
import Footer from './assets/Components/Footer/Footer';
import Signup from './assets/Components/Signup/Signup';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/information" element={<Information/> }/>
      <Route path="/price" element={<Price/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/login" element={<Login/>}  />
      <Route path="/testfree" element={<TestFree/>}  />
      <Route path='/signup' element={<Signup/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
