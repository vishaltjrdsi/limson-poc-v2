import { useState } from "react";

import {
  Page,
  SectionCard,
  Tabs,
  AgGridTable,
} from "../../../components/common";

import pendingOrderTabs from "./pendingOrderTabs";
import columns from "./pendingOrderColumns";
import rowData from "./pendingOrderMockData";

import "./PendingOrders.css";

function PendingOrders() {

  const [activeTab, setActiveTab] =
    useState("Unreleased (PO)");

  return (

 <Page
    variant="form"
    className="pending-orders-page"
>

      <SectionCard
        label="CORE WORKFLOWS"
        title="Pending Orders"
      >

        <Tabs
          tabs={pendingOrderTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        <AgGridTable
    rowData={rowData}
    columnDefs={columns}
    pagination={false}
    autoHeight={false}
    height={650}
/>

      </SectionCard>

    </Page>

  );

}

export default PendingOrders;