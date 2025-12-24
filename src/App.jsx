import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ScrollToTop from './reusable/ScrollToTop';
import Projects from './pages/Projects';
import Divisions from './pages/Divisions';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
    <Header/>
    {/* main pages */}
    <main className='min-h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>        
        <Route path='/about' element={<AboutUs/>}/>        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/divisions' element={<Divisions/>}/>
      </Routes>
    </main>

    <Footer/>
    </Router>
  )
}

export default App