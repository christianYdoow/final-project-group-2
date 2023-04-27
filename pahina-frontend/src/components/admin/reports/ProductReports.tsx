import React, { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function ProductReports(): JSX.Element {
  const [date, setDate] = useState<string>("");
  const [endpoint, setEndpoint] = useState<string>("day");

  const handleDownload = async (): Promise<void> => {
    try {
      const param =
        endpoint === "day"
          ? "dayDate"
          : endpoint === "month"
          ? "monthYearDate"
          : "yearDate";
      const response = await axios.get(
        `http://localhost:8080/web/api/admin/reports-${endpoint}?${param}=${date}`
      );
      const data = response.data;

      // Generate PDF document using jsPDF
      const doc = new jsPDF();
      doc.text(`Report for ${date} (${endpoint} view)`, 10, 10);
      const dataArr = data.split("\n").map((row: string) => row.split(" "));
      autoTable(doc,{
        head: [["Product", "ID","Count", "Total Count"]],
        body: dataArr,
      });

      // Download PDF document
      doc.save(`report-${endpoint}-${date}.pdf`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border border-1 p-2">
      <h2>Product Report</h2>
      <hr />

    <div className="d-flex justify-content-center align-items-center">
    <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      
      <label>
        Endpoint:
      </label>
      <select value={endpoint} onChange={(e) => setEndpoint(e.target.value)}>
          <option value="day">Day</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
        </select>
      <button onClick={handleDownload} className="btn btn-primary ms-2">
        Download Report
      </button>
    </div>

    </div>
  );
}

export default ProductReports;
