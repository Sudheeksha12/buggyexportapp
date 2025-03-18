import React from "react";

const AddBuggy = ({ vehicle,route,charges,onVehicleChange,onRouteChange,onChargesChange,onAdd,}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Vehicle"
        value={vehicle}
        onChange={(e) => onVehicleChange(e.target.value)}
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Route (e.g., A to D)"
        value={route}
        onChange={(e) => onRouteChange(e.target.value)}
        style={inputStyle}
      />

      
      <input
        type="number"
        placeholder="Charges"
        value={charges}
        onChange={(e) => onChargesChange(e.target.value)}
        style={inputStyle}
      />
      <button onClick={onAdd} style={buttonStyle("green")}>Add Row</button>
    </>
  );
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid",
  minWidth: "150px",
};

const buttonStyle = () => ({
  backgroundColor:"white",
  color: "white",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  border: "none",
});

export default AddBuggy;
