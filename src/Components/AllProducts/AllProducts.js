import React, { useState,useEffect } from 'react';
import useFirebase from '../../Hooks/UseFirebase';
//import { useNavigate} from 'react-router-dom';

import AllProduct from './AllProduct';

const AllProducts = () => {
  const {users}=useFirebase()
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    },[])

    return (
        <>
        <table className="table">
               <thead className="thead-light">
                 <tr>
                   {/* <th>Product ID</th> */}
                   <th>Buyer Name</th>
                   <th>Product Name</th>
                   <th>Category</th>
                   <th>Price</th>
                   {/* <th>Actions</th> */}
                 </tr>
       
               </thead>
               <tbody>
                 {
                   products.map((product)=>{
                       return <AllProduct  key={product._id} product={product}/>
                   })
                 }
       
               </tbody>
             </table>
              </>
    );
};

export default AllProducts;