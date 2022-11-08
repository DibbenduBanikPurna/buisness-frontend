import React, {  useState } from 'react';

const SearchProduct = () => {
    const [productId,setProductId]=useState('')
    console.log(productId)
    const [product,setProduct]=useState({})
    console.log(product)

    const handleBlur=(e)=>{
        setProductId(e.target.value);
    }
   const handleSubmit=e=>{
       e.preventDefault();
       fetch(`http://localhost:5000/product/${productId}`)
       .then(res=>res.json())
       .then(data=>{
           console.log(data)
           setProduct(data);
       })
   }

    return (
        <div className='container'>
            <br/>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleBlur} type="text" name="product_name"/>
                <input  type="submit" value="submit"/>
              
            </form>

            <table className="table">
            <thead className="thead-light">
          <tr>
            {/* <th>Product ID</th> */}
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
           
          </tr>

        </thead>
        <tbody>
          
        <tr>
           
          {/* <td>{product.id}</td> */}
           <td>{product.product_name}</td>
           <td>{product.product_category}</td>
           <td>{product.product_price}</td>
         
           </tr> 

        </tbody>
      </table>
        </div>
    );
};

export default SearchProduct;