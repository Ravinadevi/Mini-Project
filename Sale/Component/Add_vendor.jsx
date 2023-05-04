
import { useState } from "react";

const Add_vendor = () => {
  const [vname, setvname] = useState();

  const [vmailid, setvmailid] = useState();
  const add = () => {
    var temp = {
      vname: vname,
      vmail: vmailid,
    };
    
  };
  return (
    <>
      {" "}
      <div className="border-0 p-4 add">
        <h4 className="head_">Add vendor here</h4>
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
          <button className="btn btn-dark  col-5" onClick={add}>
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default Add_vendor;
