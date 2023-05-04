
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add_vendor from "./Add_vendor";

const Vvendor = () => {
  const [data, setdata] = useState([]);
  const [val, setval] = useState(0);
  const [vname, setvname] = useState();
  const nav = useNavigate();
  const [vmailid, setvmailid] = useState();
  const [vid, setvid] = useState();

  useEffect(() => {
    
  }, [vid, val]);
  const edit = () => {
    var temp = {
      vname: vname,
      vmail: vmailid,
      vid: vid,
    };
    
  };
  const del = (e) => {
    var temp = {
      vid: e,
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
              Vendor{" "}
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
                        <td>{d.vid}</td>
                        <td>{d.vname}</td>
                        <td>{d.vmail}</td>
                        <td>
                          {" "}
                          <button
                            className=" btn btn-dark"
                            onClick={() => (
                              setvname(d.vname),
                              setval(1),
                              setvmailid(d.vmail),
                              setvid(d.vid)
                            )}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-dark"
                            onClick={() => del(d.vid)}
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
        <div className="bor4 ">
          <h4 className="head_">Edit vendor here</h4>
          <label htmlFor="userid">
            {" "}
            <b>Name</b>
          </label>
          <input
            type="text"
            className="form-control input"
            id="userid"
            value={vname}
            onChange={(e) => setvname(e.target.value)}
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
            value={vmailid}
            onChange={(e) => setvmailid(e.target.value)}
          />{" "}
          <br />
          <div className="row   d-flex " style={{ marginLeft: "10%" }}>
            <button className="btn btn-dark  col-3 m-2" onClick={() => edit()}>
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
    );
  } else if (val === 2) {
    return (
      <>
        <div className="main ">
          <div className="bor4">
            <Add_vendor />
            <button className="btn btn-dark" onClick={() => setval(0)}>
              back
            </button>{" "}
          </div>{" "}
        </div>
      </>
    );
  }
};

export default Vvendor;
