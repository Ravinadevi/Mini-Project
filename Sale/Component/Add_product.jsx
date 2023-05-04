
import { useState } from "react";

const Add_product = () => {
  const [productname, setproductname] = useState();
  const [minquantity, setminquantity] = useState();
  const [cp, setcp] = useState();
  const [sp, setsp] = useState();
  const add = () => {
    var temp = {
      productname: productname,
      minquantity: minquantity,
      cp: cp,
      sp: sp,
    };
   
  };
  return (
    <>
      {" "}
      <div className="border-0 p-4 add">
        <h4>Add Product here</h4>
        <label htmlFor="userid">
          {" "}
          <b>Product Name</b>
        </label>
        <input
          type="text"
          className="form-control input"
          id="userid"
          value={productname}
          onChange={(e) => setproductname(e.target.value)}
        />{" "}
        <br />{" "}
        <label htmlFor="sp">
          {" "}
          <b>Selling price</b>
        </label>
        <input
          type="text"
          className="form-control input"
          id="sp"
          value={sp}
          onChange={(e) => setsp(e.target.value)}
        />{" "}
        <br />{" "}
        <label htmlFor="cp">
          {" "}
          <b>cost price</b>
        </label>
        <input
          type="text"
          className="form-control input"
          id="cp"
          value={cp}
          onChange={(e) => setcp(e.target.value)}
        />
        <br />
        <label htmlFor="minq">
          <b>Minimum quantity</b>
        </label>
        <input
          type="text"
          className="form-control input"
          id="minq"
          value={minquantity}
          onChange={(e) => setminquantity(e.target.value)}
        />{" "}
        <br />
        <div className="row   d-flex " style={{ marginLeft: "10%" }}>
          <button className="btn btn-dark  col-5" onClick={add}>
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default Add_product;
