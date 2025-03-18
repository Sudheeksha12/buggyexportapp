import React from "react";

const ExportButton = ({ data }) => {
  const downloadCSV = () => {
    
    const header = "Vehicle,Route,Charges\n";
    const rows = data.map((row) => `${row.vehicle},${row.route},${row.charges}`)
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "buggy_data.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={downloadCSV} style={buttonStyle}>
      Export
    </button>
  );
};

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "12px",
  borderRadius: "4px",
  cursor: "pointer",
  border: "none",
};

export default ExportButton;
