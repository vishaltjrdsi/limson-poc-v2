import { useState } from "react";

import {
  Page,
  SectionCard,
  Card,
  Button,
  Input,
  AgGridTable,
  DataTable
} from "../../../components/common";

import columns from "./columns";
import mockData from "./mockData";

import "./SpotRate.css";

function SpotRate() {
  const [rates] = useState(mockData);

  return (
    <Page variant="form">
      <SectionCard
        label="SYSTEM TOOLS"
        title="Currency Daily Spot Rate"
        actions={
          <>
            <Button variant="secondary">Insert Next</Button>

            <Button variant="secondary">Insert Today</Button>
          </>
        }
      >
      <DataTable
    columns={columns}
    data={rates}
>

          <div className="spot-rate-footer">
            <div className="spot-rate-values">
              <strong>Monday, April 27 2026</strong>

              <Input className="spot-rate-input" value="1.00000" readOnly />
              <Input className="spot-rate-input" value="1.38426" readOnly />
              <Input className="spot-rate-input" value="0.85316" readOnly />
            </div>

            <Button>Save</Button>
          </div>

        </DataTable>
      </SectionCard>
    </Page>
  );
}

export default SpotRate;
