
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add_customer = () => {
  const [cname, setcname] = useState();
  const [cmobile, setcmobile] = useState();
  const [cmailid, setcmailid] = useState();
  const nav = useNavigate();
  const add = () => {
    var temp = {
      cname: cname,
      emailid: cmailid,
      cmobile: cmobile,
    };
 
  };
  return (
    <>
      {" "}
      <div className="border-0 p-4 add">
        <h4>Add Customer here</h4>
        <label htmlFor="userid">
          {" "}
          <b>Name</b>
        </label>
        <input
          type="text"
          className="form-control input"
          id="userid"
          value={cname}
          onChange={(e) => setcname(e.target.value)}
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
          value={cmailid}
          onChange={(e) => setcmailid(e.target.value)}
        />
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
          <button className="btn btn-dark  col-5" onClick={add}>
            add
          </button>
        </div>
      </div>
    </>
  );
};

export default Add_customer;
