import { useState } from "react";

import {
  Input,
  Select,
  Tabs,
} from "../../../../components/common";

import inventoryTabs from "../inventoryTabs";

function InventoryHeader() {

  const [activeTab, setActiveTab] =
    useState("Quantities");

  return (
    <>

      {/* Search */}

      <div className="inventory-search-grid">

        <Select
          label="SEARCH ITEM"
          value="553362"
          options={[
            {
              label: "553362",
              value: "553362",
            },
          ]}
        />

        <Input
          label="LOT #"
          value="0704ASSET"
        />

        <Input
          label="CUSTOMER CODE #"
          value="553362"
        />

      </div>

      {/* Information */}

      <div className="inventory-info">

        <div className="inventory-info-row">

          <strong>Lot Number:</strong>

          <span>-</span>

          <strong>Lot Trace Code:</strong>

          <span>-</span>

        </div>

        <div className="inventory-info-row">

          <strong>Item Code:</strong>

          <span>553362</span>

          <strong>Description:</strong>

          <span>
            SALMON WHL FZN DARK PINK 602 4/5 1X10 LB
          </span>

        </div>

      </div>

      <Tabs
        tabs={inventoryTabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

    </>
  );

}

export default InventoryHeader;