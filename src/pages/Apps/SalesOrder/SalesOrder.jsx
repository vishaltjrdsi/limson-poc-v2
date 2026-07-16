import {
  Page,
  SectionCard,
  Button,
} from "../../../components/common";

import SalesOrderInformation from "./components/SalesOrderInformation";
import SalesOrderDetails from "./components/SalesOrderDetails";

import "./SalesOrder.css";

function SalesOrder() {
  return (
    <Page variant="form">
      <SectionCard
        label="SALES ORDER"
        title="SO# 242748"
        actions={
          <div className="sales-header-actions">
            <Button variant="secondary">
              Cust PO
            </Button>

            <Button variant="secondary">
              View
            </Button>

            <Button variant="secondary">
              Actions
            </Button>
          </div>
        }
      >
        <SalesOrderInformation />

        <SalesOrderDetails />
      </SectionCard>
    </Page>
  );
}

export default SalesOrder;