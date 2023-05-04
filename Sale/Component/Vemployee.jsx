
import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Add_employee from "./Add_employee";

const VEmployee = () => {
  const [data, setdata] = useState([[]]);
  const [val, setval] = useState(0);
  const [eid, seteid] = useState();
  const [ename, setename] = useState();
  const nav = useNavigate();
  const [emailid, setemailid] = useState();
  useEffect(() => {
   
  }, [eid]);
  const edit = () => {
    var temp = {
      vname: ename,
      vmail: emailid,
      eid: eid,
    };
    
  };
  const del = (e) => {
    var temp = {
      eid: e,
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
              Employee{" "}
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
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => {
                  return (
                    <>
                      <tr>
                        <td>{d.eid}</td>
                        <td>{d.ename}</td>
                        <td>{d.emailid}</td>
                        <td>
                          <button
                            className=" btn btn-dark"
                            onClick={() => (
                              setename(d.ename),
                              setval(1),
                              setemailid(d.emailid),
                              seteid(d.eid)
                            )}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          {" "}
                          <button
                            className="btn btn-dark"
                            onClick={() => del(d.eid)}
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
      <>
        <div className="main ">
          <div className="bor4">
            <div>
              <h4 className="head_">Edit Employee here</h4>
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
              <div className="row   d-flex " style={{ marginLeft: "10%" }}>
                <button
                  className="btn btn-dark  col-3 m-2"
                  onClick={() => edit()}
                >
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
        </div>
      </>
    );
  } else if (val === 2) {
    return (
      <>
        {" "}
        <div className="main ">
          <div className="bor4">
            <div>
              <Add_employee />
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

export default VEmployee;
