import { useState } from "react";

import {
  Page,
  SectionCard,
  Tabs,
  Button,
} from "../../../components/common";

import itemTabs from "./itemTabs";
import ItemTab from "./components/ItemTab";

import "./ItemMaintenance.css";

function ItemMaintenance() {

  const [activeTab, setActiveTab] =
    useState("Item");

  return (

    <Page variant="form">

      <SectionCard
        label="ITEM MAINTENANCE"
        title="Item #143624"
        actions={
          <div className="item-header-actions">

            <Button variant="secondary">
              New Item
            </Button>

            <Button variant="secondary">
              Clone Import
            </Button>

            <Button>
              Save Changes
            </Button>

          </div>
        }
      >

        <Tabs
          tabs={itemTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {activeTab === "Item" && (
          <ItemTab />
        )}

        {activeTab === "Inbound (Vendor)" && (
          <div className="coming-soon-card">
            <div className="coming-soon-label">
              INBOUND (VENDOR)
            </div>

            <h2>Coming Soon</h2>
          </div>
        )}

        {activeTab === "Inbound (Warehouse)" && (
          <div className="coming-soon-card">
            <div className="coming-soon-label">
              INBOUND (WAREHOUSE)
            </div>

            <h2>Coming Soon</h2>
          </div>
        )}

        {activeTab === "Outbound (Customer)" && (
          <div className="coming-soon-card">
            <div className="coming-soon-label">
              OUTBOUND (CUSTOMER)
            </div>

            <h2>Coming Soon</h2>
          </div>
        )}

        {activeTab === "Pricing" && (
          <div className="coming-soon-card">
            <div className="coming-soon-label">
              PRICING
            </div>

            <h2>Coming Soon</h2>
          </div>
        )}

      </SectionCard>

    </Page>

  );

}

export default ItemMaintenance;