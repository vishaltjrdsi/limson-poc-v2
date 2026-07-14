import Card from "../Card/Card";
import AgGridTable from "../AgGridTable/AgGridTable";

import "./DataTable.css";

function DataTable({
  columns,
  data,
  children,
  pagination = false,
  autoHeight = true,
}) {
  return (
    <Card padding="none">

      <AgGridTable
        columnDefs={columns}
        rowData={data}
        pagination={pagination}
        autoHeight={autoHeight}
      />

      {children}

    </Card>
  );
}

export default DataTable;