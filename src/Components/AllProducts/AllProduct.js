import React from 'react';

const AllProduct = ({product}) => {
    return (
              
               <tr>
           
           {/* <td>{product.id}</td> */}
           <td>{product.name}</td>
           <td>{product.product_name}</td>
           <td>{product.product_category}</td>
           <td>{product.product_price}</td>
           
           {/* <td>
             <span  className="btn btn-warning">edit</span> || <span onClick={()=>deleteProduct(product._id)} className="btn btn-danger">delete</span>
           </td> */}
           </tr> 
           
        
    );
};

export default AllProduct;