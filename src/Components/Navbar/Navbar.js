import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';
import Admin from '../Admin/Admin';


const Navbar = () => {
  const {users,logOut}=useFirebase()
  console.log(users.email)
  const [admin,setAdmin]=useState([])
  //console.log(admin.email)
  useEffect(()=>{
    fetch('http://localhost:5000/admin')
    .then(res=>res.json())
    .then(data=>{
      setAdmin(data[0])
      console.log(data[0])
    })
  },[])
    return (
        <nav className="navbar   navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Buisness Tally</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
           {admin.email !==users.email ? <li className="nav-item">
              <Link className="nav-link" to="/addproduct">AddProduct</Link>
            </li>:''}
          {admin.email !==users.email ?  <li className="nav-item">
              <Link className="nav-link" to="/viewproduct">ViewProduct</Link>
            </li>:''}
       
      {admin.email=== users.email  &&   <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li> }
            {      admin?.email=== users?.email  &&   <li className="nav-item">
              <Link className="nav-link" to="/allproduct">AllProducts</Link>
            </li> }
            <li className="nav-item">
              <Link className="nav-link" to="/searchproduct">searchproduct</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{users?.email && <button onClick={logOut} className='btn btn-danger'>Logout</button> }</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;