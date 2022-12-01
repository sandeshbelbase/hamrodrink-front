import React, { useState } from "react";
const ProductSidenav = () => {
    const [status, setStatus] = useState()
    const handleAdd =()=>{
        setStatus((prev)=> !prev)
        console.log("sss", status)

    }
    return(
        <div className="SideNav">
            <ul> 
                <li><a href="./"> Home</a></li>

                <li onClick={handleAdd}>
                    Product
                    {
                        status && <ul>
                        <li><a href="./">Add Product</a></li>
                        <li><a href="./">View Product</a></li>
                        <li><a href="./">Delete Product</a></li>
                    </ul>
                    }
                    
                </li>

                <li><a href="./"> Orders</a></li>
                <li><a href="./"> logout</a></li>
            </ul>
        </div>
    );
};


  
export default ProductSidenav;
