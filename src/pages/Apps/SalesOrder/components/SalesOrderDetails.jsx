import { useState } from "react";

import {
  Card,
  Tabs,
  Button,
  AgGridTable,
} from "../../../../components/common";

import tabs from "../salesOrderTabs";
import columns from "../salesOrderColumns";
import rowData from "../salesOrderMockData";

function SalesOrderDetails() {

  const [activeTab, setActiveTab] =
    useState("Order");

  return (

    <Card
      className="sales-details-card"
      padding="none"
    >

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        className="sales-order-tabs"
      />

      <AgGridTable
        rowData={rowData}
        columnDefs={columns}
        pagination={false}
        height={420}
      />

      <div className="sales-summary">

        <div>

          <strong>Total Orders:</strong> 1,889

        </div>

        <div>

          <strong>Total Qty:</strong> 1,879

        </div>

        <div>

          <strong>Total Wgt:</strong> 26,206.00

        </div>

        <div>

          <strong>Total Value:</strong> $11,885.75

        </div>

        <Button className="sales-process-btn">

          Process Order

        </Button>

      </div>

    </Card>

  );

}

export default SalesOrderDetails;