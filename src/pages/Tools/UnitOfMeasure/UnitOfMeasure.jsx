import { useState } from "react";

import {
  Page,
  SectionCard,
  Card,
  Button,
  AgGridTable,
  DataTable
} from "../../../components/common";

import columns from "./columns";
import mockData from "./mockData";

import "./UnitOfMeasure.css";

function UnitOfMeasure() {
  const [rowData] = useState(mockData);

  return (
    <Page variant="form">
      <SectionCard
        label="SYSTEM TOOLS"
        title="Units of Measure Against Base"
        actions={
          <div className="uom-header-actions">
            <Button variant="secondary">
              CA - KG | US - LB
            </Button>

            <Button>
              Save Changes
            </Button>
          </div>
        }
      >
       <DataTable
    columns={columns}
    data={rowData}
>

          <div className="uom-footer">
            <Button variant="secondary">
              Add UOM
            </Button>

            <Button variant="danger-outline">
              Delete
            </Button>
          </div>
        </DataTable>
      </SectionCard>
    </Page>
  );
}

export default UnitOfMeasure;