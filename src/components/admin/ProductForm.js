import React from "react";
import { useForm } from "react-hook-form";

const ProductForm = () => {


    const {handleSubmit, register, reset} = useForm()

    const onSubmit=(data)=>{
        console.log("product", data)
        reset();
    }
  return (
    <form onSubmit ={handleSubmit(onSubmit)} >
    <label>
        Name:<input type="text" name="name" {...register("name")}/>
        Price:<input type="text" name="price" {...register("price")} />
        Brand:<input type="text" name="brand" {...register("brand")}/>
        Description:<textarea id="description" name="description" rows="4" cols="50"{...register("description")}>
            
        </textarea>
    </label>
            <input type="submit" value="Add product" />
</form>
    );
};

export default ProductForm;
