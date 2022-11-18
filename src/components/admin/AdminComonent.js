import React from "react";
import LoginSide from "./LoginSide";
import Login from "./Login";

const AdminComonent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <LoginSide />
        </div>
        <div className="col-md-6">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AdminComonent;
