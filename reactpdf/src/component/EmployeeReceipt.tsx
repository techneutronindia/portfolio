import React, {  } from "react";
import { IEmployee } from "../models/IEmployee";


interface Employee{
    employee:IEmployee;
}

interface DisplayReceiptProps{
    data:Employee;
    visibility:boolean;
}

const EmployeeReceipt: React.FC<DisplayReceiptProps> = ({data,visibility}) => {

  return (
    <>   
      <div className="container mt-4 mb-5">
        <div className="row" style={{ display: `${visibility ? 'block' : 'none'}`}}>
          <div className=" offset-3" style={{ marginLeft: "auto" }}>
            <div className="card">
              <div className="card-header text-center bg-primary text-white">
                <h3>Emp Code-2011</h3>
              </div>

              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-3">
                    <strong>Name</strong>
                  </div>

                  <div className="col-3">{data.employee.fullName}</div>

                  <div className="col-3">
                    <strong>Address:</strong>
                  </div>

                  <div className="col-3">{data.employee.address}</div>
                </div>

                {/* <div className="border-top my-4"></div> */}

                <div className="row mb-3">
                  <div className="col-3">
                    <strong>Gender:</strong>
                  </div>

                  <div className="col-3">{data.employee.genderSelect}</div>

                  <div className="col-3">
                    <strong>Designation:</strong>
                  </div>

                  <div className="col-3">{data.employee.department}</div>
                </div>

                <div className="row mb-3">
                  <div className="col-3">
                    <strong>Phone No:</strong>
                  </div>
                  <div className="col-3">{data.employee.phoneNumber}</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header text-center">
                <h3>Calculation</h3>
              </div>

              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-3">
                    <strong>Amount:</strong>
                  </div>
                  <div className="col-3">{data.employee.amount}</div>

                  <div className="col-3">
                    <strong>Deduction:</strong>
                  </div>
                  <div className="col-3">{data.employee.deduction}</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <div className="card-body">
                  <div className="row md-3">
                    <div className="col">
                      <h3>Total:</h3>
                    </div>
                    <div className="col-3">{data.employee.amount-data.employee.deduction}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};
export default EmployeeReceipt;
