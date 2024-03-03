import React from 'react'
import Login from './Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './Signup'
import { UserAuthContextProvider } from './Context/UserAuthContext'
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import ForgetPassword from './ForgetPassword'
import PageNotFound from './PageNotFound'
import PhoneSignUp from './PhoneSignUp'

const Common = () => {
  return (
    <div>
        <UserAuthContextProvider>
        <Router>
            <Routes>
                <Route path="/signup" element={<Signup/>}/>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                <Route path="/forget" element={<ForgetPassword/>}/>
                <Route path="/phonesignup" element={<PhoneSignUp/>}/>
                {/* <Route path='*' element={<Navigate to="/404" />}/> */}
                <Route path='*' element={<PageNotFound />}/>
            </Routes>
        </Router>
        </UserAuthContextProvider>
        
    </div>
  )
}

export default Common