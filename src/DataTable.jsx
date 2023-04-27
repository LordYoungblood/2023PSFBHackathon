import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

function DataTable({ rows, columns, toggleInUse }) {
  const handleRowClick = (params) => {
    toggleInUse(params.row.id);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
