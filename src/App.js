import React, { useEffect, useState } from 'react';


 import {
   BrowserRouter as Router,
   Switch,
   Route,
  
 } from "react-router-dom";
 import Login from './Components/Login/Login/Login';
 import Register from './Components/Login/Login/Register';

 import Navbar from './Components/Navbar/Navbar';

 import useFirebase from './Hooks/UseFirebase';
 
import Admin from './Components/Admin/Admin';

import AddProduct from './Components/AddProduct/AddProduct';
import ViewProduct from './Components/ViewProduct/ViewProduct';
import SearchProduct from './Components/SearchProduct/SearchProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import AllProducts from './Components/AllProducts/AllProducts';
import Welcome from './Components/Welcome/Welcome';


function App() {
  const {users}=useFirebase()
  const [admin,setAdmin]=useState([])
  
  let s={}
  const data=admin.map(x=>{
    return s=x;
  })
 
  useEffect(()=>{
    fetch('http://localhost:5000/admin')
    .then(res=>res.json())
    .then(data=>{
      setAdmin(data)
      //console.log(data)
    })
  },[])
  return (
    <div className="App">
    
       <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> {users.email? <Welcome/> :<Login/>}  </Route>
          <Route  path="/register"> <Register/> </Route>
        {s.email===users.email && <Route path="/allproduct">  <AllProducts/> </Route>}
          <Route path="/addproduct"> <AddProduct/> </Route>
          <Route path="/viewproduct"> <ViewProduct/> </Route>
          <Route path="/makeadmin"> <Admin/></Route>
          <Route path="/searchproduct"> <SearchProduct/>  </Route>
          <Route path="/editproduct/:id"> <EditProduct/> </Route>
          <Route path="/admin"> <Admin/> </Route>
          {/* {s.email===users.email &&<Route path="/noticeform"> <NoticeForm/> </Route>} */}
          
                  </Switch>
      </Router> 
      

    </div>
  );
}

export default App;
