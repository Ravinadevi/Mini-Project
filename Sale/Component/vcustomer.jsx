
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add_customer from "./Add_customer";
import Add_employee from "./Add_employee";

const Vcustomer = () => {
  const [data, setdata] = useState([[1, "sheik", "sheik@gmail"]]);
  const [val, setval] = useState(0);
  const [ename, setename] = useState();
  const nav = useNavigate();
  const [emailid, setemailid] = useState();
  const [cmobile, setcmobile] = useState();
  const [cid, setcid] = useState();
  useEffect(() => {
    
  }, [cid]);
  const edit = () => {
    var temp = {};
   
  };
  const del = (e) => {
    var temp = {
      cid: e,
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
              Customer
              <button className="btn btn-dark m-2" onClick={() => setval(2)}>
                Add
              </button>
            </h3>
            <table className="table ">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <>
                      <tr>
                        <td>{d.cid}</td>
                        <td>{d.cname}</td>
                        <td>{d.emailid}</td>
                        <td>{d.cmobile}</td>
                        <td>
                          <button
                            className=" btn btn-dark"
                            onClick={() => (
                              setcid(d.cid),
                              setename(d.cname),
                              setval(1),
                              setemailid(d.emailid),
                              setcmobile(d.cmobile)
                            )}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          {" "}
                          <button
                            className="btn btn-dark"
                            onClick={() => del(d.cid)}
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
      <div className="main ">
        <div className="bor4">
          <div>
            <h4 className="head_">Edit customer here</h4>
            <label htmlFor="userid">
              {" "}
              <b>Name</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="userid"
              value={ename}
              onChange={(e) => setename(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="userpsd">
              {" "}
              <b>Email Id</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="userpsd"
              value={emailid}
              onChange={(e) => setemailid(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="userph">
              {" "}
              <b>Phone</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="userph"
              value={cmobile}
              onChange={(e) => setcmobile(e.target.value)}
            />
            <br />
            <div className="row   d-flex " style={{ marginLeft: "10%" }}>
              <button
                className="btn btn-dark  col-3 m-2"
                onClick={() => edit()}
              >
                Edit
              </button>
              <button
                className="btn btn-dark col-3 m-2 "
                onClick={() => setval(0)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (val === 2) {
    return (
      <>
        <div className="main ">
          <div className="bor4">
            <div>
              <Add_customer />
            </div>
            <button className="btn btn-dark" onClick={() => setval(0)}>
              back
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default Vcustomer;
