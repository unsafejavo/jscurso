import "../index.css";
import Employee from "../Components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../Components/AddEmployee";
import EditEmployee from "../Components/EditEmployees";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Tetra",
      role: "ayudaaaaaaaaa",
      img: "https://etenonfitness.com/wp-content/uploads/2023/12/paco-bautista-1656919697.jpeg",
    },
    {
      id: 2,
      name: "Popi",
      role: "Commit Developer",
      img: "https://i.pinimg.com/originals/cb/e4/7a/cbe47a3f063711c0ec0c4bc501bd5e08.png",
    },
    {
      id: 3,
      name: "Fran",
      role: "Tarkov enthusiast",
      img: "https://img.europapress.es/fotoweb/fotonoticia_20170912102559_690.jpg",
    },
    {
      id: 4,
      name: "Pacheco",
      role: "No me anda la placa",
      img: "https://preview.redd.it/32w58b54yd651.jpg?width=640&crop=smart&auto=webp&s=3c45ec8314095347f695fd9b41f9d30ba09a03d6",
    },
    {
      id: 5,
      name: "Sobdy",
      role: "Gym trainer",
      img: "https://st2.depositphotos.com/6235482/9564/i/450/depositphotos_95649982-stock-photo-trainer-showing-ok-sign.jpg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="App bg-blue-950 min-h-screen">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={EditEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default Employees;
