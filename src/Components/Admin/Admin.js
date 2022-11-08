import React, { useState } from 'react';

const Admin = () => {
    const [user,setUser]=useState('')

    

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/user/admin', {
            method: 'post',
            headers: {
                //'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({email:user, role:'admin'})
        }).then(res => res.json())
            .then(data => {
               // setSuccess(true)
               // setEmail("")
                console.log(data)
                alert("Admin added successfully");
            })
    }
    return (
        <div className='container bg-secondary vh-100'>
            <div className='row'>
                <div className='col-md-4 m-auto mt-5'>
                <form onSubmit={handleSubmit}>
            <input name="email" onChange={(e)=>setUser(e.target.value)} type="email" placeholder='Enter email'/>
            <button className='btn btn-primary'>Make Admin</button>
        </form>
                </div>
            </div>
        </div>
        
    );
};

export default Admin;