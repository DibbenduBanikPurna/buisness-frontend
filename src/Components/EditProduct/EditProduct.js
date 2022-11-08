import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [product,setproduct]=useState({})
   // console.log(product)
    const history =useHistory();
    const {id}=useParams()
    const handleBlur=e=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...product };
        newData[field] = value
        setproduct(newData)
    }
    //console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setproduct(data);
        })
    },[id])
    const handleSubmit=(e)=>{
        e.preventDefault()

        fetch(`http://localhost:5000/product/${id}`,{
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)

        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert("product updated successfully!");
            history.push('/viewproduct');

        })
    }
    return (
        <div className='text-center'>
            <h4 className='text-secondary'>Update Your product</h4>
            <form onSubmit={handleSubmit}>
                {/* <label>product ID</label>
                <br/>
                <input name="id" defaultValue={product?.id} onBlur={handleBlur} type="number"/>
                <br/> */}
                <label>product Name</label>
                <br/>
                <input name="product_name" defaultValue={product?.product_name} onBlur={handleBlur} type="text"/>
                <br/>
               
                <label>product Category</label>
                <br/>
                <input name="product_category" defaultValue={product.product_category} onBlur={handleBlur} type="text"/>
                <br/>
               
                <label>product price</label>
                <br/>
                <input name="product_price" defaultValue={product.product_price} onBlur={handleBlur} type="number"/>
                <br/>
                <input className='btn btn-success' type="submit" value="Add"/>
            </form>
        </div>
    );
};

export default EditProduct;