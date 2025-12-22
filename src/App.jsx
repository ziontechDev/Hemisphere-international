import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ScrollToTop from './reusable/ScrollToTop';

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
      </Routes>
    </main>

    <Footer/>
    </Router>
  )
}

export default App