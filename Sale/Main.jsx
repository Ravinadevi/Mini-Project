import { Route, Routes } from "react-router-dom";
import VEmployee from "./Component/Vemployee";
import Products from "./Component/product";
import Sales from "./Component/sales";
import Vcustomer from "./Component/vcustomer";
import Vvendor from "./Component/vendor";
import Vpurchase from "./Component/vpurchase";
import Admin from "./Screen/Admin";
import App from "./Screen/App";
import Emphome from "./Screen/EmpHome";
import Home from "./Screen/Home";
import Report from "./Screen/Report";
import "./Style/Main.css";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/Employee" element={<Emphome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<App />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Admin/Report" element={<Report />} />
        <Route path="/Admin/Report/vendor" element={<Vvendor />} />
        <Route path="/Admin/Report/employee" element={<VEmployee />} />
        <Route path="/Admin/Report/customer" element={<Vcustomer />} />
        <Route path="/Admin/Report/product" element={<Products />} />
        <Route path="/Admin/Report/sales" element={<Sales />} />
        <Route path="/Admin/Report/purchase" element={<Vpurchase />} />
      </Routes>
    </>
  );
};

export default Main;
