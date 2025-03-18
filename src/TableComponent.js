import React from "react";

const TableComponent = ({ columns, data }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key } style={styles.th}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row) => (
            <tr key={row.key} style={styles.tr}>
              {columns.map((col) => (
                <td key={col.key } style={styles.td}>
                  {col.render ? col.render(row) : row[col.dataIndex]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} style={styles.empty}>
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};


const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid",
    fontFamily: "Arial",
  },
  th: {
    border: "1px solid ",
    padding: "8px",
    backgroundColor: "white",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid ",
    padding: "8px",
  },
  tr: {
    border: "1px solid ",
    padding: "8px",
  },
 

};

export default TableComponent;
