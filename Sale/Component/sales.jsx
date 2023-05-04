
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Add_sales from "./Add_sales";

const Sales = () => {
  const [val, setval] = useState(0);
  const [data, setdata] = useState([[1, "pen", 100, 120, "1 / 22", " 1 /23"]]);
  const [productname, setproductname] = useState();
  const [minquantity, setminquantity] = useState();
  const [cp, setcp] = useState();
  const [sp, setsp] = useState();
  const [product, setproduct] = useState();
  const nav = useNavigate();
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
  const view = (e) => {
    if (e === 0) {
     
    } else if (e === 1) {
    
    } else if (e === 2) {
     
    }
  };
  if (val == 0) {
    return (
      <>
        <div className="main ">
          <button
            className="btn btn-dark m-2"
            onClick={() => nav("/Admin/Report")}
          >
            back
          </button>
          <div className=" btn-group" style={{ float: "right" }}>
            <button className="btn btn-dark" onClick={() => view(0)}>
              View All
            </button>
            <button className="btn btn-dark" onClick={() => view(1)}>
              This Month
            </button>
            <button className="btn btn-dark" onClick={() => view(2)}>
              Last Month
            </button>
          </div>

          <div className="bor1">
            <h3 className="head_">
              Sales
              <button className="btn btn-dark m-2" onClick={() => setval(2)}>
                Add
              </button>
            </h3>{" "}
            <div className="bor6 p-2">
              <h4>Total:</h4>
              <h4>price:</h4>
            </div>
            <table className="table ">
              <thead>
                <tr>
                  <th>Id</th>

                  <th>product</th>
                  <th>Quantity</th>
                  <th>Sale</th>
                  <th>Date</th>

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
  } else if (val === 2) {
    return (
      <>
        <div className="main">
          <div className=" bor1 ">
            <button className="btn btn-dark m-2" onClick={() => setval(0)}>
              back
            </button>
            <Add_sales />
          </div>
        </div>
      </>
    );
  }
};

export default Sales;
