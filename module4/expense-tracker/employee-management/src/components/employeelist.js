import React from "react";

function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      phone: "9876543210",
      department: "IT",
      salary: 50000,
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543211",
      department: "HR",
      salary: 45000,
    },
  ];

  return (
    <div>
      <h2>Employee List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>₹{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
