import { useState } from "react";
import Cls from "../Component/customerloginorsingup";

import El from "../Component/EmployeeLogin";

const App = () => {
  const [sh0, setsh0] = useState(false);
  const [sh1, setsh1] = useState(true);

  return (
    <>
      <div className="main ">
        <div className="bor0 ">
          <div className="ce btn-group ">
            <button
              className="btn btn-dark "
              onClick={() => (setsh0(true), setsh1(false))}
            >
              Employee
            </button>

            <button
              className="btn btn-dark "
              onClick={() => (setsh0(false), setsh1(true))}
            >
              Customer
            </button>
          </div>
        </div>
        <br />
        {sh0 && <El />}
        {sh1 && <Cls />}
      </div>
    </>
  );
};

export default App;
