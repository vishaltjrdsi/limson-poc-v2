import { Card, Button } from "../../../../../../components/common";

import PurchaseOrderGrid from "./PurchaseOrderGrid";
import PurchaseFooter from "../../PurchaseFooter";

function PurchaseOrderLines() {
  return (
    <Card className="purchase-lines-card" padding="none">

      <div className="purchase-lines-header">

        <div>

          <div className="purchase-section-label">
            LINE ITEMS
          </div>

          <h3 className="purchase-section-title">
            Purchase Order Lines
          </h3>

        </div>

        <Button variant="secondary">
          Add Line
        </Button>

      </div>

      <PurchaseOrderGrid />

      <PurchaseFooter />

    </Card>
  );
}

export default PurchaseOrderLines;