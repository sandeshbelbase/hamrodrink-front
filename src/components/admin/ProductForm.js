import React from "react";
import { useForm } from "react-hook-form";

const ProductForm = () => {
    const defaultValues = {
        name:"",
        price:"",
        brand:"",
        catagories:"",
        description:"",
      };

    const {handleSubmit, register, reset} = useForm({
        defaultValues,
    })

    const onSubmit=(data)=>{
        console.log("product", data)
        reset();
    }
  return (
    <div className="productForm">
        <form onSubmit ={handleSubmit(onSubmit)} >
        <div className="row">
        

            <div className="col-md-6">
                <div className="form-cotrol">
            <label>Name</label> 
            <input placeholder="eg. tubourge" type="text" name="name" {...register("name")}/>
            </div></div>

            <div className="col-md-6">
                <div className="form-cotrol">
        <label>Price</label> 
        <input placeholder="eg.500" type="text" name="price" {...register("price")} />
        </div></div>


        <div className="col-md-6">
                <div className="form-cotrol">
        <label>Brand</label> 
        <input placeholder="eg. carlsberg" type="text" name="brand" {...register("brand")}/>
        </div></div>

        <div className="col-md-6">
                <div className="form-cotrol">
        <label>category</label> 
        <select placeholder="Catagories" name="category" {...register("category")}>
            <option name="Cold Drinks" value="colddrink">Cold Drinks</option>
            <option name="Hard Drinks" value="colddrink">Hard Drinks</option>
            <option name="Soft Drinks" value="colddrink">Soft Drinks</option>
        </select>
        </div></div>

        <div className="col-md-12">
                <div className="form-cotrol">
            <label>Product Description</label> 
        <textarea placeholder="Aaa.." id="description" name="description" rows="4" cols="100"{...register("description")}>  
        </textarea>
        </div></div>

        <div className="col-md-12">
                <div className="form-cotrol">
            <label for="img">Select image:</label>
        <input type="file" name="img" accept="image/*"/>
        </div></div>

        <div className="col-md-12">
                <div className="form-cotrol">
        <input type="submit" value="Add product" />
        </div></div>
        
        </div>
        </form>
    </div>
    );
};

export default ProductForm;
