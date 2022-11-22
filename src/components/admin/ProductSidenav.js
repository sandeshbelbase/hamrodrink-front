import React from "react";
const ProductSidenav = () => {
    return(
        <div className="SideNav">
            <ul> 
                <li><a href="./"> Home</a></li>

                <li>
                    <a href="./">Product</a>
                    <ul>
                        <li><a href="./">Add Product</a></li>
                        <li><a href="./">View Product</a></li>
                        <li><a href="./">Delete Product</a></li>
                    </ul>
                </li>

                <li><a href="./"> Orders</a></li>
                <li><a href="./"> logout</a></li>
            </ul>
        </div>
    );
};


  
export default ProductSidenav;
