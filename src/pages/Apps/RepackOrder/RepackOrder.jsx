import {
  Page,
  SectionCard,
  Input,
  Button,
} from "../../../components/common";

import OrderInformation from "./components/OrderInformation";
import RepackDetails from "./components/RepackDetails";

import "./RepackOrder.css";

function RepackOrder() {
  return (
    <Page variant="form">

      <SectionCard
        label="REPACK ORDER"
        title="Order Details (04/10/2026)"
        actions={
          <div className="repack-header-actions">

            <Input
              label="SEARCH"
              value="752040"
            />

            <Button>
              Save
            </Button>

          </div>
        }
      >

        <OrderInformation />

        <RepackDetails />

      </SectionCard>

    </Page>
  );
}

export default RepackOrder;