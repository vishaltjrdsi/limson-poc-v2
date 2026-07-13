import masterData from "../../mock/masterData";
import {
  ActionCellRenderer,
  StatusCellRenderer,
} from "../../components/Common/AgGridTable/CellRenderers";

import {
  Page,
  Button,
  AgGridTable,

} from "../../components/common";

import "./MasterDataList.css";

function MasterDataList({
  setSelectedPage,
  selectedMasterData,
}) {


  const currentData =
  masterData[selectedMasterData?.id] || {
    columnDefs: [],
    rowData: [],
  };

  const columnDefs = currentData.columnDefs.map((column) => {
  if (column.field === "status") {
    return {
      ...column,
      cellRenderer: StatusCellRenderer,
    };
  }

  if (column.field === "actions") {
    return {
      ...column,
      cellRenderer: ActionCellRenderer,
      sortable: false,
      filter: false,
      resizable: false,
    };
  }

  return column;
});

  return (
    <Page>
      <div className="master-list-header">

    <div className="master-list-left">

       <button
  className="back-link"
  onClick={() => setSelectedPage("List Navigation")}
>
  ← Back to Master Data
</button>

     <h1 className="master-list-title">
    {selectedMasterData?.title || "Master Data"}
</h1>

    </div>

    <div className="master-list-actions">

        <Button variant="secondary">
            Delete
        </Button>

        <Button>
            Add New
        </Button>

    </div>

</div>

<div className="master-list-content">

   <AgGridTable
    columnDefs={columnDefs}
    rowData={currentData.rowData}
     pagination={false}
     filters={false}
    autoHeight
/>

</div>
    </Page>
  );
}

export default MasterDataList;
