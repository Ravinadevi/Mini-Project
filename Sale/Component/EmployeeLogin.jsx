
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const El = () => {
  const [ename, setename] = useState();
  const nav = useNavigate();
  const [password, setpassword] = useState();
  const [emailid, setemailid] = useState();
  const check = () => {
    var temp = [emailid, password];
  
  };

  return (
    <>
      <div>
        <div
          className="bor1 d-flex align-items-center justify-content-center "
          style={{ width: "95%", marginLeft: "2.5%" }}
        >
          <h4> Employee Login or SignUp </h4>
          <div
            className="border-0 "
            style={{ width: "25%", marginLeft: "35%" }}
          >
            <label htmlFor="Email">
              {" "}
              <b>Email</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="Email"
              value={emailid}
              onChange={(e) => setemailid(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="userpsd">
              {" "}
              <b>Password</b>
            </label>
            <input
              type="text"
              className="form-control input"
              id="userpsd"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />{" "}
            <br />
            <div className="row   d-flex " style={{ marginLeft: "10%" }}>
              <button className="btn btn-dark  col-5" onClick={check}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default El;
