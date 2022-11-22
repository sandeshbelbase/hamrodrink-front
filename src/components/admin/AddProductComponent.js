import React from "react";
import ProductForm from "./ProductForm";
import ProductSidenav from "./ProductSidenav"

const AddProductComponent = () => {
  return (
  <div>
    <div className="container-fluid">
    <div className="row">
        <div className="col-md-3"> 
                <ProductSidenav/>
        </div>
        <div className="col-md-9"> 
                <ProductForm/>
        </div>
    </div>
    </div>
   
  </div>
    );
};

export default AddProductComponent;
