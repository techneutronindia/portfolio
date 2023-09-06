import React, { useState } from "react";
import { IEmployee } from "../models/IEmployee";
import Table from "./Table";
import './EmployeeForm.css';

interface IState {
  employee: IEmployee;
}

const EmployeeForm: React.FC = () => {

  const [tableData, setTableData] = useState<IState[]>([]);
  const [state, setState] = useState<IState>({
    employee: {
      fullName: "",
      empCode: "",
      address: "",
      email: "",
      phoneNumber: 0,
      genderSelect: "",
      amount: 0,
      deduction: 0,
      deductionDescription: "",
      department: "",
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {

    event.preventDefault();
    setTableData((prevData) => [...prevData, state]);
    setState({
      employee: {
        fullName: "",
        empCode: "",
        address: "",
        email: "",
        phoneNumber: 0,
        genderSelect: "",
        amount: 0,
        deduction: 0,
        deductionDescription: "",
        department: "",
      },
    });
 

  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      employee: {
        ...state.employee,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      employee: {
        ...state.employee,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h2 className="mb-4 text-center">Employee Form</h2>
          <div className="empForm col-md-6 offset-md-3">
            <form className="card p-4 bg" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={state.employee.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter full name"  
                />
              </div>
            
              <div className="form-group">
                <label htmlFor="empCode">Employee Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="empCode"
                  name="empCode"
                  value={state.employee.empCode}
                  onChange={handleInputChange}
                  placeholder="Enter Employee"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={state.employee.address}
                  onChange={handleInputChange}
                  placeholder="Enter Address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={state.employee.email}
                  onChange={handleInputChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={state.employee.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="genderSelect">Gender</label>
                <select
                  className="form-control"
                  id="genderSelect"
                  name="genderSelect"
                  value={state.employee.genderSelect}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  name="amount"
                  value={state.employee.amount}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deduction">Deduction</label>
                <input
                  type="number"
                  className="form-control"
                  id="deduction"
                  name="deduction"
                  value={state.employee.deduction}
                  onChange={handleInputChange}
                  placeholder="Enter Deduction"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deductionDescription">
                  Deduction Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="deductionDescription"
                  name="deductionDescription"
                  value={state.employee.deductionDescription}
                  onChange={handleInputChange}
                  placeholder="Enter Deduction Description"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department</label>
                <select
                  className="form-control"
                  id="department"
                  name="department"
                  value={state.employee.department}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="" selected disabled>
                    Select department
                  </option>
                  <option value="hr">Human Resources</option>
                  <option value="it">Information Technology</option>
                  <option value="finance">Finance</option>
                </select>
              </div>

              <div className="text-center mt-3 ">
                <button type="submit" className="btn btn-primary text-center">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Table tableData={tableData}/>
      </div>
    </>
  );
};

export default EmployeeForm;
