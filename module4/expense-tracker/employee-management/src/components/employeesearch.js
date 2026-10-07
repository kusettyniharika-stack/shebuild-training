import React, { useState } from "react";

function EmployeeSearch() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      department: "IT",
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      department: "HR",
    },
    {
      id: 3,
      name: "Rahul",
      email: "rahul@gmail.com",
      department: "Finance",
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Search employee name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeSearch;
