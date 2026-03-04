import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EditEmployeeModal from "./components/EditEmployeeModal";

function App() {
 

  function addEmployee(newEmployee) {
    setEmployees((prevEmployess) => [
      ...prevEmployess,
      {
        ...newEmployee,
        id: Math.max(...prevEmployess.map((emp) => emp.id), 0) + 1,
      },
    ]);
  }

  function openAddModal() {
    setIsAddModal(true);
  }

  function closeAddModal() {
    setIsAddModal(false);
  }

  //********************************************** */
   const [employees, setEmployees] = useState(
    ()=>{
      const savedEmployes = localStorage.getItem("employees")
      return savedEmployes ? JSON.parse(savedEmployes):[]
    }
  );
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  useEffect(()=>{
    localStorage.setItem("employees", JSON.stringify(employees))
  }),[employees]

  function editClick(employee) {
    setIsEditModalOpen(true);
    setSelectedEmployee(employee);
  }

  function deleteClick(employee) {
    const confirmed = window.confirm(
      "are you sure you want delete this employee?",
    );

    if (confirmed) {
      setEmployees((prevEmployees) => {
        return prevEmployees.filter((emp) => emp.id !== employee.id);
      });
    }
    setSelectedEmployees([]);
  }

  function deleteSelectedEmployees() {
    const confirmed = window.confirm(
      "are you sure you want delete the employees?",
    );

    if (confirmed) {
      setEmployees((prevEmployees) => {
        return prevEmployees.filter(
          (emp) => !selectedEmployees.includes(emp.id),
        );
      });
      setSelectedEmployees([]);
    }
  }

  function editEmployee(updateEmployee) {
    setEmployees((prevEmployees) => {
      return prevEmployees.map((emp) => {
        return emp.id === updateEmployee.id ? updateEmployee : emp;
      });
    });
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  }

  //******************************************** */

  return (
    <div className="container">
      <div className="table-wrapper">
        <Header
          onOpenAddModal={openAddModal}
          onDeleteSelected={deleteSelectedEmployees}
        />
        <EmployeeList
          employees={employees}
          onEditClick={editClick}
          onDeleteClick={deleteClick}
          selectedEmployees={selectedEmployees}
          setSelectedEmployees={setSelectedEmployees}
        />
        <AddEmployeeModal
          isOpen={isAddModal}
          onCloseAddModal={closeAddModal}
          onAddEmployee={addEmployee}
        />
        <EditEmployeeModal
          isOpen={isEditModalOpen}
          employee={selectedEmployee}
          onCloseEditModal={closeEditModal}
          onEditEmployee={editEmployee}
        />
      </div>
    </div>
  );
}

export default App;
