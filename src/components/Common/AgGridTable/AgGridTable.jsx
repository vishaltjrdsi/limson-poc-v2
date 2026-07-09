import { AgGridReact } from "ag-grid-react";

import defaultColDef from "./defaultColDef";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import "./AgGridTable.css";

function AgGridTable({
  rowData = [],
  columnDefs = [],
  height = "500px",
}) {
  return (
    <div
      className="ag-theme-alpine limson-grid"
      style={{ height }}
    >
   
      <AgGridReact
  rowData={rowData}
  columnDefs={columnDefs}
  defaultColDef={defaultColDef}
  animateRows
  pagination={true}
  paginationPageSize={10}
  rowHeight={38}
  headerHeight={38}
/>
    </div>
  );
}

export default AgGridTable;