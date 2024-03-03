import React from 'react'
import MenuList from './MenuList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Demo from './pages/Demo'
import KeyFeatures from './pages/KeyFeatures'
import Pricing from './pages/Pricing'
import Testmonials from './pages/Testmonials'
import './navbar.scss'

const NavbarCommon = () => {
    return (
        <div className='vpn-labs-full-wrapper'>
            <div className='container'>

                <nav>
                    <div className='logo'>
                        VPN<font>Labs</font>
                    </div>
                    <div className='menu-list'>
                        <MenuList />
                    </div>
                </nav>

                <div className='page-title'>
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/try-for-free' element={<Demo />} />
                            <Route path='/key_feature' element={<KeyFeatures />} />
                            <Route path='/pricing' element={<Pricing />} />
                            <Route path='/testmonial' element={<Testmonials />} />
                        </Routes>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default NavbarCommon
