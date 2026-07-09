import Page from "../../components/common/Page/Page";
import Button from "../../components/common/Button/Button";
import AgGridTable from "../../components/common/AgGridTable/AgGridTable";
import palletRates from "../../config/admin/masterData/palletRates";

import "./MasterDataList.css";

function MasterDataList() {
  return (
    <Page>
      <div className="master-list-header">

    <div className="master-list-left">

        <button className="back-link">
            ← Back to Master Data
        </button>

        <h1 className="master-list-title">
            Pallet Rates
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
        columnDefs={palletRates.columnDefs}
        rowData={palletRates.rowData}
        height="500px"
    />

</div>
    </Page>
  );
}

export default MasterDataList;