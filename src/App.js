import { Route, Routes } from "react-router-dom";
import "./global.scss";
import AddProducts from "./pages/AddProducts";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/addProduct" element={<AddProducts />} />
    </Routes>
  );
}

export default App;
