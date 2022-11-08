import React, { useState } from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import { Alert, Button, TextField } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { token } = useFirebase()

    const handleAdminSubmit = (e) => {
        e.preventDefault()
        const user = { email }
        fetch('http://localhost:5000/user/admin', {
            method: 'put',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                setSuccess(true)
                setEmail("")
                console.log(data)
            })


    }
    const handleBlur = (e) => {
        setEmail(e.target.value)

    }
    return (
        <div className="container">
            <div className='row'>
                <div className='col-md-4 m-auto'>
                <h2>Make an admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField type="email" onBlur={handleBlur} id="standard-basic" label="Email" variant="standard" />

                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
                </div>
            </div>
             
        </div>
    );
};

export default MakeAdmin;