import Page from "../../components/Common/Page/Page";
import SectionCard from "../../components/Common/SectionCard";
import Panel from "../../components/Common/Panel/Panel";
import Button from "../../components/Common/Button/Button";
import Select from "../../components/Common/Select";
import AgGridTable from "../../components/Common/AgGridTable/AgGridTable";
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

     <Panel
    label="Adjustment Preview"
    title="Configuration details"
>
          <AgGridTable
  columnDefs={inventoryAdjustment.table.columnDefs}
  rowData={inventoryAdjustment.table.rowData}
  pagination={false}
  autoHeight
/>
        </Panel>

      </div>
    </Page>
  );
}

export default InventoryAdjustment;
