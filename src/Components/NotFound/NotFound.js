import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate()
    const handleGo=()=>{
        navigate('/')
    }
    return (
        <div className='text-center'>
            <h2>404 NOT FOUND!!!</h2>
            <button onClick={handleGo} className='btn btn-primary'>Go Back Home</button>
        </div>
    );
};

export default NotFound;