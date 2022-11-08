import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase'
//import './AddProduct.css'

const AddProduct = () => {
    const [product,setproduct]=useState({})
    
    const {users}=UseFirebase()
    
    //console.log(users.email);
    const history =useHistory();
    const handleBlur=e=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...product,email:users.email,name:users.displayName };
        newData[field] = value
        setproduct(newData)
       
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        fetch("http://localhost:5000/addproduct",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)

        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert("product added successfully");
            history.push("/viewproduct");
        })
    }
    return (
        
        <div className='container text-center mt-5'>
            <h4 className='text-primary'>Product Details</h4>
            <form onSubmit={handleSubmit}>
                {/* <label>product ID</label>
                <br/>
                <input name="id" onBlur={handleBlur} type="number"/>
                <br/> */}
                <label>product Name</label>
                <br/>
                <input name="product_name" onBlur={handleBlur} type="text"/>
                <br/>
               
                <label>product Category</label>
                <br/>
                <input name="product_category" onBlur={handleBlur} type="text"/>
                <br/>
              
                <label>product price</label>
                <br/>
                <input name="product_price" onBlur={handleBlur} type="number"/>
                <br/>
                <input className='btn btn-success mt-2' type="submit" value="Add"/>
            </form>
        </div>
        
    );
};

export default AddProduct;