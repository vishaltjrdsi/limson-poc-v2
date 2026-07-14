import Card from "../Card/Card";
import AgGridTable from "../AgGridTable/AgGridTable";

import "./GridPage.css";

function GridPage({
  actions,
  columnDefs,
  rowData,
  children,
  footer,
  autoHeight = true,
  pagination = false,
}) {
  return (
    <Card padding="none">

      {actions && (
        <div className="grid-page-header">
          {actions}
        </div>
      )}

      <AgGridTable
        columnDefs={columnDefs}
        rowData={rowData}
        autoHeight={autoHeight}
        pagination={pagination}
      />

      {children && (
        <div className="grid-page-body">
          {children}
        </div>
      )}

      {footer && (
        <div className="grid-page-footer">
          {footer}
        </div>
      )}

    </Card>
  );
}

export default GridPage;