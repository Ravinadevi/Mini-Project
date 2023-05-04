
import { useState } from "react";

const Add_employee = () => {
  const [ename, setename] = useState();
  const [emailid, setemailid] = useState();
  const add = () => {
    var temp = {
      ename: ename,
      emailid: emailid,
    };
   
  };
  return (
    <>
      {" "}
      <div className="border-0 p-4 add">
        <h4>Add Employee here</h4>
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
          id="useepsd"
          value={emailid}
          onChange={(e) => setemailid(e.target.value)}
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

export default Add_employee;
