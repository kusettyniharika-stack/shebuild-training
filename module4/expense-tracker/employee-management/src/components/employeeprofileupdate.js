import React, { useState } from "react";

function EmployeeProfile() {
  const [employee, setEmployee] = useState({
    name: "John",
    email: "john@gmail.com",
    phone: "9876543210",
    department: "IT",
    salary: "50000",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    console.log("Updated Employee:", employee);
    alert("Employee profile updated successfully!");
  };

  return (
    <div>
      <h2>Employee Profile</h2>

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Employee Name"
          required
        />

        <br />
        <br />

        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
          placeholder="Department"
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
          placeholder="Salary"
          required
        />

        <br />
        <br />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EmployeeProfile;
