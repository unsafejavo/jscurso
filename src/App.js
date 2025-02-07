import "./index.css";
import Header from "./Components/Header";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "./pages/Customers";
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<div />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
