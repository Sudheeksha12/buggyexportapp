import React from "react";
import { Table, Button } from "antd";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const dataSource = [
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
 
  
];

const columns = [
  {
    title: "Vehicle",
    dataIndex: "vehicle",
    key: "vehicle",
  },
  {
    title: "From and To",
    dataIndex: "route",
    key: "route",
  },
  {
    title: "Charges",
    dataIndex: "charges",
    key: "charges",
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "createdDate",
  },
];

const App = () => {   
  const Export = () => {
    var wsheet = XLSX.utils.json_to_sheet(dataSource  );
   var wbook = XLSX.utils.book_new(); 
   XLSX.utils.book_append_sheet(wbook, wsheet, "BuggyRoutes");

   var excelBuffer = XLSX.write(wbook, { bookType: "xlsx", type: "array" });

var b = new Blob([excelBuffer], {
    type:"x"
   });
   saveAs(b,"buggy-routes.xlsx");
  }
  

  return (
    <div style={{ padding: 20 }}>
     <div style={{ marginBottom: 16, textAlign: "right" }}>
        <Button type="primary" onClick={Export}>
          Export to Excel
        </Button>
      </div>

      <Table dataSource={dataSource} columns={columns} />;

    </div>
  );
};

export default App;
