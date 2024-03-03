import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from './Context/UserAuthContext';

const ProtectedRoute = ({children}) => {
    // const navigate = Navigate()
    const {user}=useUserAuth();
    if(!user){
        return <Navigate to={`/`}/>;
        // navigate("/")
    }
    return children;
}

export default ProtectedRoute