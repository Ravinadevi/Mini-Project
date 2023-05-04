import { useEffect, useRef, useState } from "react";

import Add_purchase from "../Component/add_purchase";
import Add_sales from "../Component/Add_sales";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [sh0, setsh0] = useState(false);
  const [sh1, setsh1] = useState(false);

  const [sh3, setsh3] = useState(false);

  const navi = useNavigate();
  useEffect(() => {}, []);
  return (
    <>
      <div className="main">
        <div
          className="btn-group"
          style={{ float: "right", marginTop: "0.6%" }}
        >
          <button className="btn btn-dark" onClick={() => setsh0(!sh0)}>
            Add_purchase
          </button>
          <button className="btn btn-dark" onClick={() => setsh1(!sh1)}>
            Add_sale
          </button>
          <button
            className="btn btn-dark"
            onClick={() => navi("/Admin/Report")}
          >
            Report
          </button>
          <button className="btn btn-dark" onClick={() => navi("/")}>
            Lagout
          </button>
        </div>
        <br />
        <br />

        <hr style={{ color: "white" }} />

        {sh0 && (
          <div className="bor1">
            <Add_purchase />
          </div>
        )}
        {sh1 && (
          <div className="bor1">
            <Add_sales />
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
