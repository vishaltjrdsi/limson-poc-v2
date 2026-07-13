import {
  Page,
  SectionCard,
  Button,
  Select,
  AgGridTable
} from "../../components/common";

import inventoryAdjustment from "../../mock/inventoryAdjustment";
import "./InventoryAdjustment.css";

const columnDefs = [
  {
    headerName: "FIELD",
    field: "field",
    flex: 1,
  },
  {
    headerName: "VALUE",
    field: "value",
    flex: 1,
  },
];

const rowData = [
  {
    field: "Module",
    value: "Inventory",
  },
  {
    field: "Screen",
    value: "Inventory Adjustment",
  },
];

function InventoryAdjustment() {
  return (
    <Page variant="form">
      <div className="inventory-adjustment-grid">

        <SectionCard
          label="Inventory Adjustment"
          title="Adjust Stock Levels"
          description="Select a module and screen to configure inventory adjustments."
          footer={
            <>
              <Button variant="secondary">
                Clear Selection
              </Button>

              <Button>
                Search Inventory
              </Button>
            </>
          }
        >
          <div className="form-row">

            <Select
  label="Module"
  placeholder="Select Module"
  options={inventoryAdjustment.moduleOptions}
/>

           <Select
  label="Screen"
  placeholder="Select Screen"
  options={inventoryAdjustment.screenOptions}
/>

          </div>
        </SectionCard>

     <SectionCard
    label="Adjustment Preview"
    title="Configuration details"
>
          <AgGridTable
  columnDefs={inventoryAdjustment.table.columnDefs}
  rowData={inventoryAdjustment.table.rowData}
  pagination={false}
  autoHeight
/>
        </SectionCard>

      </div>
    </Page>
  );
}

export default InventoryAdjustment;
