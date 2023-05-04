
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add_employee from "./Add_employee";
import Add_product from "./Add_product";

const Products = () => {
  const [data, setdata] = useState([
    [1, "pen", 23, 100, 120, "1 / 22", " 1 /23"],
  ]);
  const [val, setval] = useState(0);
  const [productname, setproductname] = useState();
  const [minquantity, setminquantity] = useState();
  const [cp, setcp] = useState();
  const [sp, setsp] = useState();
  const [product, setproduct] = useState();
  const nav = useNavigate();
  const [temp, settemp] = useState([]);
  useEffect(() => {
   
  }, []);
  const edit = () => {
    var temp = {
      pname: product,
    };
    
  };
  const del = (e) => {
    var temp = {
      pid: e,
    };
    
  };
  if (val === 0) {
    return (
      <>
        <div className="main ">
          <button
            className="btn btn-dark m-2"
            onClick={() => nav("/Admin/Report")}
          >
            back
          </button>
          <div className="bor1">
            <h3 className="head_">
              Product
              <button className="btn btn-dark m-2" onClick={() => setval(2)}>
                Add
              </button>
            </h3>
            <table className="table ">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>C-price</th>
                  <th>S-price</th>
                  <th>M-date</th>
                  <th>Ex-Date </th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <>
                      <tr>
                        <td>{d[0]}</td>
                        <td>{d[1]}</td>
                        <td>{d[2]}</td>
                        <td>{d[3]}</td>
                        <td>{d[4]}</td>
                        <td>{d[5]}</td>
                        <td>{d[6]}</td>
                        <td>
                          <button
                            className=" btn btn-dark"
                            onClick={() => (
                              setval(1),
                              setproductname(d[1]),
                              setcp(d[3]),
                              setsp(d[4]),
                              setminquantity(d[2])
                            )}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          {" "}
                          <button
                            className="btn btn-dark "
                            onClick={() => del(d[0])}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  } else if (val === 1) {
    return (
      <div className="main">
        <div className=" bor5 ">
          <h4 className="head_">Edit Product here</h4>
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
            <button className="btn btn-dark  col-3 m-2" onClick={() => edit()}>
              Edit
            </button>
            <button
              className="btn btn-dark col-3 m-2 p-2"
              onClick={() => setval(0)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  } else if (val === 2) {
    return (
      <>
        <div className="main">
          <div className="bor5">
            <Add_product />

            <button className="btn btn-dark" onClick={() => setval(0)}>
              back
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Products;
