import { Button } from "../../../../../../../components/common";

function PurchaseOrdersSection() {
  return (
    <div className="documentation-section">

      <h4>PURCHASE ORDERS</h4>

      <div className="documentation-button-row">
        <Button>OPEN PURCHASE</Button>
      </div>

      <div className="documentation-button-row">
        <Button>E-MAIL PURCHASE</Button>
        <span>SENT ON</span>
      </div>

      <div className="documentation-notes">
        <div className="documentation-notes-header">
          PURCHASE NOTES (Printed on Purchase Order)
        </div>

        <textarea defaultValue="None" />
      </div>

    </div>
  );
}

export default PurchaseOrdersSection;