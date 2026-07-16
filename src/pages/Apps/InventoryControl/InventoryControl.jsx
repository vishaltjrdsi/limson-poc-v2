import {
  Page,
  SectionCard,
  Button,
} from "../../../components/common";

 import InventoryHeader from "./components/InventoryHeader";
 import InventorySummary from "./components/InventorySummary";
 import InventoryStatus from "./components/InventoryStatus";
 import LotTransactions from "./components/LotTransactions";

import "./InventoryControl.css";

function InventoryControl() {

  return (

    <Page variant="form">

      <SectionCard
        label="INVENTORY CONTROL"
        title="Item #553362"
        actions={
          <Button>
            Save Changes
          </Button>
        }
      >

        <InventoryHeader />

        <InventorySummary />

      </SectionCard>

      <InventoryStatus />

      <LotTransactions /> 

    </Page>

  );

}

export default InventoryControl;