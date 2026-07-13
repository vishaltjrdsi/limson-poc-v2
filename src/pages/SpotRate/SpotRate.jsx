import { useState } from "react";

import Page from "../../components/common/Page/Page";
import SectionCard from "../../components/common/SectionCard";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import AgGridTable from "../../components/common/AgGridTable";

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
            <Button variant="secondary">
              Insert Next
            </Button>

            <Button variant="secondary">
              Insert Today
            </Button>
          </>
        }
      >
        <Card padding="none">

          <AgGridTable
            columnDefs={columns}
            rowData={rates}
            pagination={false}
            autoHeight
          />

          <div className="spot-rate-footer">

            <div className="spot-rate-values">

              <strong>
                Monday, April 27 2026
              </strong>

              <input
    className="spot-rate-input"
    value="1.00000"
    readOnly
/>
<input
    className="spot-rate-input"
    value="1.38426"
    readOnly
/>
<input
    className="spot-rate-input"
    value="0.85316"
    readOnly
/>

             

            </div>

            <Button>
              Save
            </Button>

          </div>

        </Card>

      </SectionCard>
    </Page>
  );
}

export default SpotRate;