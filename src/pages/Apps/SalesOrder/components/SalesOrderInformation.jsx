import {
  Card,
  Input,
  DisplayBox,
} from "../../../../components/common";

function SalesOrderInformation() {
  return (
    <div className="sales-info-grid">

      {/* Ship To */}

      <Card className="sales-info-card">

        <h3 className="sales-card-title">
          SHIP TO / BILL TO
        </h3>
          <label>SHIP TO</label>

        <div className="sales-address-content">

          <div className="ship-box">

    <strong>GFS 50TH ST - FROZEN</strong>

    <div>651 50TH ST SW</div>

    <div>GRAND RAPIDS, MI 49548</div>

</div>

         <label>BILL TO</label>

<Input value="GFS 50TH ST - FROZEN"/>

        </div>

      </Card>

      {/* Order Details */}

      <Card className="sales-info-card">

        <h3 className="sales-card-title">
          ORDER DETAILS
        </h3>

        <div className="sales-form-grid">

          <Input
            label="ORDERED DATE"
            value="4/9/2026"
          />

          <Input
            label="SO #"
            value="242748"
          />

          <Input
            label="CREATED BY"
            value="Surdam, Derek"
          />

          <Input
            label="REPLEN PLANNER"
            value="KATHERINE MARTINEZ"
          />

          <Input
            label="PICKUP DATE"
            value="4/22/2026"
          />

          <Input
            label="DELIVERY DATE"
            value="4/22/2026"
          />

        </div>

      </Card>

      {/* Logistics */}

      <Card className="sales-info-card">

        <h3 className="sales-card-title">
          LOGISTICS
        </h3>

        <div className="sales-form-grid">

          <Input
            label="TERMS"
            value="NET 30"
          />

          <Input
            label="INCOTERMS"
            value="DAP"
          />

          <Input
            label="TRUCKER"
            value="CAPSTONE"
          />

          <Input
            label="WAREHOUSE"
            value="LINEGENEVA"
          />

          <Input
            className="full-width"
            label="CUST PO#"
            value="PO-GFS-4817"
          />

          <Input
            label="INVOICE#"
            value="INV-242748"
          />

          <Input
            label="BOL#"
            value="BOL-8847291"
          />

          <Input
            className="full-width"
            label="PICKUP LOCATION"
            value="Geneva IL - Cold Storage Dock 4"
          />

        </div>

      </Card>

    </div>
  );
}

export default SalesOrderInformation;