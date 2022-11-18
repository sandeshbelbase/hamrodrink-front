import { Route, Routes } from "react-router-dom";
import "./global.scss";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
