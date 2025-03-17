import React from "react";

const buggyData = [
  {
    id: 1,
    vehicle: "CU-Buggy-6",
    route: "A to C",
    charges: 15,
    createdDate: "06-02-2024 15:50",
  },
  {
    id: 2,
    vehicle: "CU-Buggy-1",
    route: "A to B",
    charges: 10,
    createdDate: "06-02-2024 15:50",
  },
  {
    id: 3,
    vehicle: "CU-Buggy-1",
    route: "A to C",
    charges: 10,
    createdDate: "06-02-2024 15:50",
  },
];

const TableComponent = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Buggy Data Table</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
            <tr key={item.id}>
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



export default TableComponent;