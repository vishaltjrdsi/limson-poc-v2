import { Button } from "../../../../../../../components/common";

function ShipNotificationSection() {
  return (
    <div className="documentation-section">

      <h4>SHIP NOTIFICATION</h4>

      <div className="documentation-button-row">
        <Button>EDI BATCH</Button>
        <Button>OPEN NOTIFICATION</Button>
      </div>

      <div className="documentation-button-row">
        <Button>E-MAIL BATCH</Button>
        <Button>E-MAIL NOTIFICATION</Button>

        <span>SENT ON</span>

        <Button>E-MAIL BATCH</Button>
      </div>

      <div className="documentation-notes">
        <div className="documentation-notes-header">
          PURCHASE NOTES (Printed on Ship Notification)
        </div>

        <textarea />
      </div>

    </div>
  );
}

export default ShipNotificationSection;