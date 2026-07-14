import masterData from "../../mock/masterData";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../routes/routeConstants";
import listNavData from "../../config/admin/listNavData";
import {
  ActionCellRenderer,
  StatusCellRenderer,
} from "../../components/common/AgGridTable/CellRenderers";


import {
  Page,
  Button,
  AgGridTable,

} from "../../components/common";

import "./MasterDataList.css";

function MasterDataList() {

const navigate = useNavigate();
const { id } = useParams();

const currentList =
  listNavData.find(item => item.id === id);

  const currentData = masterData[id] || {
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
 onClick={() => navigate(ROUTES.LIST_NAVIGATION)}
>
  ← Back to Master Data
</button>

     <div className="master-list-title">

    <h1>
        {currentList?.title}
    </h1>

    <h3>
        Master Data
    </h3>

</div>

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
