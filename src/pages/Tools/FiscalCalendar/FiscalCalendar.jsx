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

import "./FiscalCalendar.css";

function FiscalCalendar() {
  const [rowData] = useState(mockData);

  return (
    <Page variant="form">
      <SectionCard
        label="SYSTEM TOOLS"
        title="Fiscal Calendar Setup"
        actions={
          <div className="fiscal-header-actions">

            <Input
              label="START DATE"
              type="date"
            />

            <Input
              label="END DATE"
              type="date"
            />

            <Button>
              Setup Period
            </Button>

          </div>
        }
      >

        <DataTable
    columns={columns}
    data={rowData}
>

          <div className="fiscal-footer">

            <Button variant="secondary">
              Delete Period
            </Button>

            <Button variant="secondary">
              Edit Period Dates
            </Button>

            <Button variant="secondary">
              Start Blackout
            </Button>

            <Button variant="secondary">
              End Blackout
            </Button>

          </div>

        </DataTable>

      </SectionCard>
    </Page>
  );
}

export default FiscalCalendar;