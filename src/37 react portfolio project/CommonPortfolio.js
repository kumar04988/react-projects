import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import './portfolio.scss';

const CommonPortfolio = () => {
    const [backg,setBackg]=useState("white")
    const [appColor,setAppColor]=useState({bgColor:"#000000",textColor:"#fff"})
   

  return (
    <div className='portfolio' style={{"backgroundColor":appColor.bgColor,"color":appColor.textColor}}>
       {/* <AnimatePresence mode='wait'> */}
       <Router>
            <Header backg={backg} setBackg={setBackg} setAppColor={setAppColor} appColor={appColor}/>
            <Routes>
              <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About  appColor={appColor}/>} />
                <Route path="/contact" element={<Contact appColor={appColor}/>} />
                <Route path="/projects" element={<Projects appColor={appColor}/>} />
                <Route path="/services" element={<Services appColor={appColor}/>} />
            </Routes>
            </Router>
       {/* </AnimatePresence> */}
    </div>
  )
}

export default CommonPortfolio