import "./App.css";
import Employee from "./Components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Tetra" role="Co-owner" />
          <Employee name="Fran" role="tarkov enthusiast" />
          <Employee name="Popi" role="1 commit coder" />
          <Employee name="Javi" role="newbie" />
          <Employee name="DUO" role="LEYENDA" />
          <Employee name="Ale" role="La Jefa" />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
