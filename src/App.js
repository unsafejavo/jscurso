import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./Components/AddEmployee";
import EditEmployee from "./Components/EditEmployees";
import Header from "./Components/Header";
import Employees from "./pages/Employees";

function App() {
  return (
    <Header>
      <Employees />
    </Header>
  );
}

export default App;
