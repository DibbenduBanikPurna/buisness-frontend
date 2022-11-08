import React from 'react';

const ViewProducts = ({product,updateProduct,deleteProduct}) => {
  console.log(product)
    return (
              
               <tr>
           
           {/* <td>{product.id}</td> */}
           <td>{product.product_name}</td>
           <td>{product.product_category}</td>
           <td>{product.product_price}</td>
           <td>
             <span onClick={()=>updateProduct(product._id)} className="btn btn-warning">edit</span> || <span onClick={()=>deleteProduct(product._id)} className="btn btn-danger">delete</span>
           </td>
           </tr> 
           
        
    );
};

export default ViewProducts;