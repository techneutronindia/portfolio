import React, { useState } from "react";
import { IEmployee } from "../models/IEmployee";
import EmployeeReceipt from "./EmployeeReceipt";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Employee {
  employee: IEmployee;
}

interface DisplayComponentProps {
  tableData: Employee[];
}

const Table: React.FC<DisplayComponentProps> = ({ tableData }) => {

  const [reciptVisible, setReciptVisible] = useState(false);

  const [genrateVisible, setgenrateVisible] = useState(false);

  const [recipt, setRecipt] = useState<Employee>({
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

  const createRecipt = (data: any) => {
    setRecipt(data);
    setReciptVisible(true);
    setgenrateVisible(true);
  };

  const generatePDF = async () => {
    const input = document.getElementById("pdf-content");
    let canvas: HTMLCanvasElement | null = null; // Define canvas variable

    if (input) {
      canvas = await html2canvas(input); // Assign the canvas value here
      const imgData = canvas.toDataURL("image/png");

      // Define the width and height for the PDF page (in millimeters)
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Calculate height proportionally

      const pdf = new jsPDF("p", "mm", "a4"); // Create PDF with A4 dimensions
      pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
      pdf.save("generated-pdf.pdf");
      setgenrateVisible(false);
      setReciptVisible(false);
    }
  };

  return (
    <>
      <div className="mt-5 mb-5 table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Emp-Code</th>
              <th>Address</th>
              <th>Email</th>
              <th>Number</th>
              <th>Gender</th>
              <th>Amount</th>
              <th>Deduction</th>
              <th>Deduction Description</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.employee.fullName}</td>
                <td>{data.employee.empCode}</td>
                <td>{data.employee.address}</td>
                <td>{data.employee.email}</td>
                <td>{data.employee.phoneNumber}</td>
                <td>{data.employee.genderSelect}</td>
                <td>{data.employee.amount}</td>
                <td>{data.employee.deduction}</td>
                <td>{data.employee.deductionDescription}</td>
                <td>{data.employee.department}</td>
                <td>
                  <button onClick={() => createRecipt(data)}>
                    Create Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div id="pdf-content" style={{display:`${reciptVisible ? "block" : "none"}`}}>
          <EmployeeReceipt data={recipt} visibility={reciptVisible} />
        </div>
        <button className="btn btn-primary"onClick={generatePDF}style={{display: `${genrateVisible ? "block" : "none"}`,width: "150px",marginLeft: "500px",}}>Generate PDF</button>
      </div>
    </>
  );
};

export default Table;
