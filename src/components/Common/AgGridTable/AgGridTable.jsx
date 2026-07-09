import { AgGridReact } from "ag-grid-react";

import defaultColDef from "./defaultColDef";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./AgGridTable.css";

function AgGridTable({
  rowData = [],
  columnDefs = [],
  height = "500px",
  autoHeight = false,
  pagination = true,
  pageSize = 10,
}) {
  const gridClassName = [
    "ag-theme-quartz",
    "limson-grid",
    autoHeight ? "limson-grid-auto-height" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={gridClassName}
      style={{
        height: autoHeight ? "auto" : height,
      }}
    >
      <AgGridReact
        theme="legacy"
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows
        pagination={pagination}
        paginationPageSize={pageSize}
        rowHeight={38}
        headerHeight={34}
        domLayout={autoHeight ? "autoHeight" : "normal"}
      />
    </div>
  );
}

export default AgGridTable;
