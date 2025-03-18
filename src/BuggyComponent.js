import React, { useState } from "react";
import TableComponent from "./TableComponent";
import AddBuggyForm from "./AddBuggy";
import ExportButton from "./ExportButton";

const BuggyComponent = () => {
  const [data, setData] = useState([
    {
      key: 1,
      vehicle: "CU-Buggy-6",
      route: "A to C",
      charges: 15,
      createdDate: "06/02/2024 15:50",
    },
    {
      key: 2,
      vehicle: "CU-Buggy-1",
      route: "A to B",
      charges: 10,
      createdDate: "06/02/2024 15:50",
    },
    {
      key: 3,
      vehicle: "CU-Buggy-1",
      route: "A to C",
      charges: 12,
      createdDate: "06/02/2024 15:50",
    },
  ]);

  const [vehicle, setVehicle] = useState("");
  const [route, setRoute] = useState("");
  const [charges, setCharges] = useState("");

  const deleteRow = (key) => {
    setData(data.filter((row) => row.key !== key));
  };

  const addRow = () => {

    const newRow = {
      vehicle,
      route,
      charges: parseFloat(charges),
      createdDate: new Date().toLocaleString(),
    };

    setData([...data, newRow]);
    setVehicle("");
    setRoute("");
    setCharges("");
  };

  const columns = [
    { 
    title: "Vehicle",
    dataIndex: "vehicle", 
    key: "vehicle"
    },
    { 
    title: "Route", 
    dataIndex: "route", 
    key: "route" 
    },
    { 
    title: "Charges", 
    dataIndex: "charges", 
    key: "charges" 
    },
    {
    title: "Created Date", 
    dataIndex: "createdDate", 
    key: "createdDate" 
    },
    {
      title: "Action",
      key: "action",

      render: (row) => (
        <button
          onClick={() => deleteRow(row.key)}
          style={{
            backgroundColor: "red",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Buggy Route Report</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        <AddBuggyForm
          vehicle={vehicle}
          route={route}
          charges={charges}
          onVehicleChange={setVehicle}
          onRouteChange={setRoute}
          onChargesChange={setCharges}
          onAdd={addRow}
        />
        <ExportButton columns={columns} data={data} />
      </div>

      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default BuggyComponent;
