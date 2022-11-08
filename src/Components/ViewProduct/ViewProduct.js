import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFirebase';

//import useFirebase from '../Hook/useFirebase';

import ViewProducts from './ViewProducts';

const ViewProduct = () =>{
    const [products,setproducts]=useState([])
   
    
    const [loading,setLoading]=useState(true)
   // const history=useHistory()
   const history =useHistory();
  const {users}=useFirebase()
 // let  email=user.email
 // console.log(products)
 

    useEffect(()=>{
        fetch(`http://localhost:5000/product/my/${users?.email}`)
        .then(res=>res.json())
        .then(data=>
          {
            //window.location('/viewproduct');
          setproducts(data)
          setLoading(false);
          //window.location.replace("");
          //console.log(data);
          //console.log(email)
    })
    },[users.email])

  
    const deleteProduct=(id)=>{
        fetch(`http://localhost:5000/product/${id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
           // console.log(data)
            const remainData=products.filter((pd=>pd._id!==id))
            setproducts(remainData);
           // console.log(remainData)
        });
    }

    const updateProduct=(id)=>{
      //console.log(id)
      history.push(`/editproduct/${id}`)
      
    } 
    return (
       <div className='text-center'>
       {loading ? <img className="img-fluid" style={{margin:"auto"}} src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif" alt=""/> :<>
 <table className="table">
        <thead className="thead-light">
          <tr>
            {/* <th>Product ID</th> */}
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>

        </thead>
        <tbody>
          {
              products.map((product)=>{
                return <ViewProducts updateProduct={updateProduct} deleteProduct={deleteProduct} key={product._id} product={product}/>
              })
          }

        </tbody>
      
      </table>
      </>
}
       </div>
    );
};

export default ViewProduct;