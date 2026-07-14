import { useState } from "react";

import {
  Page,
  SectionCard,
  Card,
  Button,
  AgGridTable,
  DataTable
} from "../../components/common";

import columns from "./columns";
import mockData from "./mockData";

import "./PricingMismatch.css";

function PricingMismatch() {
  const [rowData] = useState(mockData);

  return (
    <Page variant="form">
      <SectionCard
        label="SYSTEM TOOLS"
        title="Pricing Location Mismatch"
        actions={
          <div className="pricing-actions">
            <Button variant="secondary">
              Export CSV
            </Button>

            <Button>
              Resolve Selected
            </Button>
          </div>
        }
      >
        <DataTable
    columns={columns}
    data={rowData}
/>
      </SectionCard>
    </Page>
  );
}

export default PricingMismatch;