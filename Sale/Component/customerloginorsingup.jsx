
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cls = () => {
  const [sh0, setsh0] = useState(true);
  const [sh1, setsh1] = useState(false);
  const [cname, setcname] = useState();
  const nav = useNavigate();
  const [cmailid, setcmailid] = useState();
  const [cmobile, setcmobile] = useState();
  const [password, setpassword] = useState();
  const check = () => {
    var temp = [cmailid, password];
   
  };
  const register = () => {
    var temp = {
      cname: cname,
      emailid: cmailid,
      cmobile: cmobile,
    };

   
  };
  return (
    <>
      <div>
        {sh0 && (
          <div
            className="bor1 d-flex align-items-center justify-content-center "
            style={{ width: "95%", marginLeft: "2.5%" }}
          >
            <h4> Customer Login or </h4>

            <button
              className="btn btn-dark  "
              style={{ margin: "1%" }}
              onClick={() => (setsh0(false), setsh1(true))}
            >
              Signup
            </button>
            <div
              className="border-0 "
              style={{ width: "25%", marginLeft: "35%" }}
            >
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
              />{" "}
              <br />
              <label htmlFor="password">
                {" "}
                <b>Password</b>
              </label>
              <input
                type="text"
                className="form-control input"
                id="password"
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
        )}
        {sh1 && (
          <div>
            <div>
              <div
                className="bor1 d-flex align-items-center justify-content-center "
                style={{ width: "95%", marginLeft: "2.5%" }}
              >
                <h4> Customer SignUp or</h4>
                <button
                  className="btn btn-dark"
                  style={{ margin: "1%" }}
                  onClick={() => (setsh1(false), setsh0(true))}
                >
                  {" "}
                  Login
                </button>
                <div
                  className="border-0 "
                  style={{ width: "25%", marginLeft: "35%" }}
                >
                  <label htmlFor="name">
                    {" "}
                    <b>Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control input"
                    id="name"
                    value={cname}
                    onChange={(e) => setcname(e.target.value)}
                  />{" "}
                  <br />
                  <label htmlFor="userid">
                    {" "}
                    <b>EmailId</b>
                  </label>
                  <input
                    type="text"
                    className="form-control input"
                    id="userid"
                    value={cmailid}
                    onChange={(e) => setcmailid(e.target.value)}
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
                    <button className="btn btn-dark col-5 " onClick={register}>
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cls;
