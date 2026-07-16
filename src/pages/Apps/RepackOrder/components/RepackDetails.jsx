import { useState } from "react";

import {
  Card,
  Tabs,
  Button,
  AgGridTable,
} from "../../../../components/common";

import tabs from "../repackTabs";
import columns from "../repackColumns";
import rowData from "../repackMockData";

function RepackDetails() {

  const [activeTab, setActiveTab] =
    useState("Lines");

  return (

    <Card
      className="repack-details-card"
      padding="none"
    >

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        className="repack-tabs"
      />

      <AgGridTable
        rowData={rowData}
        columnDefs={columns}
        pagination={false}
        height={120}
      />

      <div className="repack-summary">

        <div>

          <strong>E²:</strong> AX3

        </div>

        <div>

          <strong>Total CTNS:</strong> 1170

        </div>

        <div className="repack-total">

          <strong>Total:</strong> $17,908.00

        </div>

      </div>

      <div className="repack-footer">

        <Button variant="secondary">
          Print Picklist
        </Button>

        <Button variant="secondary">
          New
        </Button>

        <Button>
          Start Repack
        </Button>

      </div>

    </Card>

  );

}

export default RepackDetails;