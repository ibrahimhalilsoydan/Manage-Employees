import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeModal from "./components/AddEmployeeModal";

function App() {

  const [employees,setEmployees]=useState([
    {
      id:1,
      name:"ibrahim halil soydan",
      email:"ibrahimhalilsoydan@outlook.com.tr",
      address:"27 nizip-gaziantep",
      phone:"05422730431"
    }
  ])


  const [isAddModal, setIsAddModal] = useState(false)

  function openAddModal(){
    setIsAddModal(true)
  }

  function closeAddModal(){
    setIsAddModal(false)
  }

  return (
    
      <div className="container">
        <div className="table-wrapper">
          <Header onOpenAddModal={openAddModal} />
          <EmployeeList employees={employees}/>
          <AddEmployeeModal isOpen={isAddModal} onCloseAddModal={closeAddModal}/>

        </div>
      </div>
    
  );
}

export default App;
