import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import useFirebase from '../../../Hooks/UseFirebase';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {signIn, users,signInUsingGoogle}=useFirebase()
   
    const location = useLocation()
    const history = useHistory()

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...loginData };
       // const {users}=useFirebase()
        newData[field] = value
        setLoginData(newData)

    }

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        signIn(loginData.email, loginData.password, location, history)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:users.email })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }

    const handleGoggleSignIn=()=>{
        signInUsingGoogle(location,history)
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {email:users.email })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className='login'>
                
                <div className='text-center text-info'><h1>Welcome To MBSTU</h1></div>
            
            <div className='col-md-3 m-auto border border-primary bg-light p-5'>
                    <p className='text-center mt-5 text-light'>Log-in</p>
                    <form onSubmit={handleLogInSubmit}>
                        <TextField  name="email" type="email" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" label="Your Email" variant="standard" />
                        < TextField name="password" onChange={handleChange} sx={{ width: 1, m: 1 }} id="standard-basic" type="password" label="Your Password" variant="standard" />

                        <Button sx={{ width: 1, m: 1 }} type="submit" variant='contained'>LOGIN</Button>

                        <Link to="/register">  <Button color="inherit">NEW USER? Create New Account</Button> </Link>
                      
                        <p>---------------------</p>
                        <button className='btn btn-warning' onClick={handleGoggleSignIn}>Login With Google</button>

                    </form>


                </div>

           
        </div>
    );
};

export default Login;