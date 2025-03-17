import React from "react";

const buggyData = [
  {
    key: 1,
    vehicle: "CU-Buggy-6",
    route: "A to C",
    charges: 15,
    createdDate: "06-02-2024 15:50",
  },
  {
    key: 2,
    vehicle: "CU-Buggy-1",
    route: "A to B",
    charges: 10,
    createdDate: "06-02-2024 15:50",
  },
  {
    key: 3,
    vehicle: "CU-Buggy-1",
    route: "A to C",
    charges: 10,
    createdDate: "06-02-2024 15:50",
  },
];

const Download = () => {
  const downloadCSV = () => {
    const header = "Vehicle,Route,Charges,Created Date\n";
    const rows = buggyData.map((item) =>
          `${item.vehicle},${item.route},${item.charges},${item.createdDate}`).join("\n");

    const csv = header + rows;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "buggy_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ color: "black" }}>Buggy Route Report</h2>

      <button
        onClick={downloadCSV}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: " 8px",
          borderRadius: "4px",
          
        }}
      >
        Export</button>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>Vehicle</th>
            <th style={thStyle}>Route</th>
            <th style={thStyle}>Charges</th>
            <th style={thStyle}>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {buggyData.map((item) => (
            <tr key={item.key}>
              <td style={tdStyle}>{item.vehicle}</td>
              <td style={tdStyle}>{item.route}</td>
              <td style={tdStyle}>{item.charges}</td>
              <td style={tdStyle}>{item.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  backgroundColor: "#f0f0f0",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "8px",
};

export default Download;
