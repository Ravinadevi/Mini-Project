import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Report = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="main">
        <div className="bor1 btn">
          <button className="btn btn-dark" onClick={() => nav("/Admin")}>
            <b>Back</b>
          </button>
        </div>
        <div className="bor1 btn-group ">
          <button
            className="btn btn-dark"
            onClick={() => nav("/Admin/Report/sales")}
          >
            Sales
          </button>
          <button
            className="btn btn-dark "
            onClick={() => nav("/Admin/Report/purchase")}
          >
            purchase
          </button>
        </div>
        <div className="bor1 btn-group">
          <button
            className="btn btn-dark"
            onClick={() => nav("/Admin/Report/vendor")}
          >
            Vendor
          </button>
          <button
            className="btn btn-dark"
            onClick={() => nav("/Admin/Report/employee")}
          >
            Employee
          </button>
          <button
            className="btn btn-dark"
            onClick={() => nav("/Admin/Report/customer")}
          >
            Customer
          </button>
          <button
            className="btn btn-dark"
            onClick={() => nav("/Admin/Report/product")}
          >
            Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Report;
