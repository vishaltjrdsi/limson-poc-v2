import { AgGridReact } from "ag-grid-react";
import defaultColDef from "./defaultColDef";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./AgGridTable.css";

function AgGridTable({
  rowData = [],
  columnDefs = [],
  height = 500,
  autoHeight = false,
  maxHeight = 450,
  pagination = true,
  pageSize = 10,
  className = "",
  onSelectionChanged,
  rowSelection = "single",
}) {
  const shouldAutoHeight = autoHeight && rowData.length <= 10;

  const gridClassName = [
    "ag-theme-quartz",
    "limson-grid",
    shouldAutoHeight ? "limson-grid-auto-height" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={gridClassName}
      style={{
        height: shouldAutoHeight ? "auto" : Math.min(height, maxHeight),
        maxHeight,
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
        domLayout={shouldAutoHeight ? "autoHeight" : "normal"}
        overlayNoRowsTemplate="
          <span class='ag-overlay-no-rows-center'>
            No records found
          </span>
        "
      />
    </div>
  );
}

export default AgGridTable;
