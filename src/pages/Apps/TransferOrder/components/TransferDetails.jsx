import { useState } from "react";

import {
  Card,
  Tabs,
  Button,
  AgGridTable,
} from "../../../../components/common";

import tabs from "../transferTabs";
import columns from "../transferColumns";
import rowData from "../transferMockData";

function TransferDetails() {

  const [activeTab, setActiveTab] =
    useState("Transfer Details");

  return (

    <Card className="transfer-details-card" padding="none">

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        className="transfer-tabs"
      />

      <AgGridTable
    rowData={rowData}
    columnDefs={columns}
    pagination={false}
    domLayout="autoHeight"
/>

      <div className="transfer-summary">

        <div>

          <strong>Total Cartons:</strong> 1,580

        </div>

        <div>

          <strong>Total Weight:</strong> 29,760.00

        </div>

        <div className="transfer-total">

          <strong>Total:</strong> $21,167.00

        </div>

      </div>

      <div className="transfer-footer">

        <Button variant="secondary">
          Print
        </Button>

        <Button variant="secondary">
          New
        </Button>

        <Button variant="secondary">
          Email
        </Button>

      </div>

    </Card>

  );

}

export default TransferDetails;