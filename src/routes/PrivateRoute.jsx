import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useAuth()
    console.log(user)
    if(loading) {
        return <p className='text-3xl font-inter'>Loading...</p>
    }
    if(user) {
        return children;
    }
    return <Navigate to="/auth/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;