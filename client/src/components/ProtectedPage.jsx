import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedPage = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    
    return isLoggedIn ? children : <Navigate to="/" />;
};

export default ProtectedPage;
