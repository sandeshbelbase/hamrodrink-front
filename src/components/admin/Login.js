import React from "react";
import { useForm } from "react-hook-form";
// import api from "../../api";

const Login = () => {
  const defaultValues = {
    username: "",
    password: "",
  };

  const { handleSubmit, register, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log("dadadada", data);
    // api.post("/user/login", data);
    console.log("mailo");
    reset();
  };

  return (
    <div className="adminForm">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>UserName:</label> <br />
        <input
          {...register("username")}
          type="text"
          placeholder="eg: john"
        />{" "}
        <br />
        <label>Password:</label> <br />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />{" "}
        <br />
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

export default Login;
