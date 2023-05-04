import { useEffect, useRef, useState } from "react";
import Add_product from "../Component/Add_product";
import Add_vendor from "../Component/Add_vendor";
import CloseButton from "react-bootstrap/CloseButton";

import Add_employee from "../Component/Add_employee";

const Add_purchase = () => {
  const [sh0, setsh0] = useState("");
  const [sh1, setsh1] = useState("none");
  const [sh2, setsh2] = useState("none");
  const [sh3, setsh3] = useState(false);

  const [vl, setvl] = useState(0);
  const [allvendor, setallvendor] = useState([]);
  const [vendor, setvendor] = useState();
  const [allEmployee, setallEmployee] = useState([1, 2, 3]);
  const [Employee, setEmployee] = useState("");
  const [allproduct, setallproduct] = useState([1, 2, 3]);
  const [product, setproduct] = useState();
  const [add, setadd] = useState([]);
  const [purschaseid, setpurshaseid] = useState();
  const [cash, setcash] = useState();
  const [bank, setbank] = useState();

  const [tbil, settbil] = useState(0);

  const [Quantity, setquantity] = useState("");
  const [Total, settotal] = useState("");
  const [Tax, settax] = useState("");
  const [mdate, setmdate] = useState("");
  const [exdate, setexdate] = useState("");
  const [price, setprice] = useState("");

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yy = String(today.getFullYear()).slice(2);
  const currentDate = `${dd}/${mm}/${yy}`;

  const addpro = () => {
    let tbill = add.reduce((acc, curr) => {
      return acc + parseInt(curr[2]) + parseInt(curr[3]);
    }, 0);
    settbil(tbill);

    var temp = {
      bill: [currentDate, tbil, "pending", vendor, Employee],
      product: add,
    };
    console.log(temp);
    
  };
  useEffect(() => {
    
  }, []);

  var key = 1;

  const ad = () => {
    var k = [product, Quantity, price, Total, Tax, mdate, exdate];
    console.log(k);
    if (k.indexOf("") === -1) {
      setadd([...add, k]);
      setquantity("");
      setprice("");
      setexdate("");
      setmdate("");
      settax("");
      settotal("");
    }
  };

  const remove = (e) => {
    var i = add.indexOf(e);
    setadd((add) => add.filter((i) => i !== e));
  };
  if (vl === 0) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center ">
          <div style={{ display: sh0 }}>
            <div className="bor2 p-4 ">
              <div className="row">
                <label htmlFor="vendor" className="">
                  <b>Select vendor</b>{" "}
                </label>
                <select
                  value={vendor}
                  className="form-control col iw "
                  onChange={(e) => setvendor(e.target.value)}
                  name="vendor"
                >
                  {allvendor.map((v) => {
                    key = key + 1;
                    return (
                      <option key={key} value={v.vname}>
                        {v.vname}
                      </option>
                    );
                  })}
                </select>{" "}
                <button
                  className="btn col btn-secondary m-2"
                  onClick={() => (setsh0("none"), setsh1(""))}
                >
                  Add
                </button>
              </div>
              <div className="row">
                <label htmlFor="Employee">
                  <b>Select Employee </b>
                </label>
                <select
                  value={Employee}
                  className="form-control col iw"
                  onChange={(e) => setEmployee(e.target.value)}
                  name="Employee"
                >
                  {allEmployee.map((v) => {
                    key = key + 1;
                    return (
                      <option key={key} value={v.ename}>
                        {v.ename}
                      </option>
                    );
                  })}
                </select>
                <button
                  className="btn col btn-secondary m-2"
                  onClick={() => (setsh0("none"), setsh2(""))}
                >
                  Add
                </button>
              </div>

              <button
                style={{ marginLeft: "35%", marginTop: "1%", width: "50px" }}
                className="btn btn-secondary p-2 "
                onClick={() => ad()}
              >
                Add
              </button>
            </div>
          </div>

          <div className=" m-2 p-2" style={{ display: sh0, overflow: "auto" }}>
            {" "}
            <h3 style={{ marginLeft: "40%", fontFamily: "serif" }}>
              Purchase here
            </h3>
            <table className="table table-dark m-2">
              <thead>
                <tr>
                  <td>Product</td>

                  <td>Quantity</td>
                  <td>Price</td>
                  <td>Total</td>
                  <td>Tax</td>
                  <td>Manufacture date</td>
                  <td>Exp date</td>
                  <td>Cancel</td>
                </tr>
              </thead>
              <tbody>
                {add.map((d, i) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <p>{d[0]}</p>
                        </td>
                        <td>
                          <p>{d[1]}</p>
                        </td>
                        <td>
                          <p>{d[2]}</p>
                        </td>
                        <td>
                          <p>{d[3]}</p>
                        </td>
                        <td>
                          <p>{d[4]}</p>
                        </td>
                        <td>
                          <p>{d[5]}</p>
                        </td>
                        <td>
                          <p>{d[6]}</p>
                        </td>
                        <td>
                          <button
                            onClick={() => remove(d)}
                            className="btn btn-secondary"
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <td>
                    <select
                      className="form-control "
                      value={product}
                      onChange={(e) => setproduct(e.target.value)}
                      name="Product"
                    >
                      {allproduct.map((v) => {
                        key = key + 1;
                        return (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        );
                      })}
                    </select>
                  </td>
                  <td>
                    <input
                      type="number"
                      value={Quantity}
                      onChange={(e) => setquantity(e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                      onKeyUp={() => (
                        settotal(price * Quantity),
                        settax((price * Quantity * 10) / 100)
                      )}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={Total}
                      onChange={(e) => settotal(e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={Tax}
                      onChange={(e) => settax(e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={mdate}
                      onChange={(e) => setmdate(e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={exdate}
                      onChange={(e) => setexdate(e.target.value)}
                      className="form-control"
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <button
                className="btn btn-dark"
                style={{ flex: 1, justifyItems: "center" }}
                onClick={() => (addpro(), setvl(1))}
              >
                Pay Bill
              </button>
            </div>
          </div>
          <div style={{ display: sh1 }}>
            <CloseButton
              variant="Black"
              onClick={() => (setsh0(""), setsh1("none"))}
            />
            <Add_vendor />
          </div>
          <div style={{ display: sh2 }}>
            <CloseButton
              variant="Black"
              onClick={() => (setsh0(""), setsh2("none"))}
            />
            <Add_employee />
          </div>
        </div>
      </>
    );
  } else if (vl === 1) {
    
    return (
      <>
        <button className="btn btn-dark " onClick={() => setvl(0)}>
          Back
        </button>
        <div className="" style={{ width: "25%", marginLeft: "40%" }}>
          <h2>Total:{tbil}</h2>

          <div>
            <label htmlFor="userid">
              {" "}
              <b>Purchase_Id</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="userid"
              value={purschaseid}
              onChange={(e) => setpurshaseid(e.target.value)}
            />
            <br />
            <label htmlFor="cash">
              {" "}
              <b>Cash</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="cash"
              value={cash}
              onChange={(e) => setcash(e.target.value)}
            />
            <br />
            <label htmlFor="bank">
              {" "}
              <b>bank</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="bank"
              value={bank}
              onChange={(e) => setbank(e.target.value)}
            />
            <br />
            <button className="btn btn-success" >
              Pay
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Add_purchase;
