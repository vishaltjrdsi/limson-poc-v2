import { useState } from "react";

import {
  Page,
  Tabs,
} from "../../components/common";

import reportCategories from "./reportCategories";

import SalesReports from "./Sales/SalesReports";

// Temporary placeholders
function PurchasingReports() {
  return <div style={{ padding: 24 }}>Purchasing Reports</div>;
}

function InventoryReports() {
  return <div style={{ padding: 24 }}>Inventory Reports</div>;
}

function ItemsContactsReports() {
  return <div style={{ padding: 24 }}>Items & Contacts Reports</div>;
}

function Reports() {

  const [category, setCategory] = useState("Sales");

  return (

    <Page>

      <Tabs
        tabs={reportCategories.map(
          item => item.label
        )}
        activeTab={category}
        onChange={setCategory}
      />

      {category === "Sales" &&
        <SalesReports />
      }

      {category === "Purchasing" &&
        <PurchasingReports />
      }

      {category === "Inventory" &&
        <InventoryReports />
      }

      {category === "Items & Contacts" &&
        <ItemsContactsReports />
      }

    </Page>

  );
}

export default Reports;