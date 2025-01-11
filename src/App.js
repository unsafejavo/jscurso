import "./index.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Tetra" role={role} />
          <Employee name="Ale" role="intern" />
          <Employee name="Popi" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
