import {
  Button,
  Input,
  Select,
} from "../../../../components/common";

function PurchaseHeader() {

  return (

    <div className="purchase-header">

      {/* Left */}

      <div className="purchase-header-left">

        <div className="purchase-title">

          PURCHASE
          <br />
          ORDERS

        </div>

        <Button variant="secondary">
          ◀
        </Button>

        <Button variant="secondary">
          ▶
        </Button>

        <Select
          value="211058"
          options={[
            {
              label: "211058",
              value: "211058",
            },
          ]}
        />

      </div>

      {/* Center */}

      <div className="purchase-header-center">

        <span className="purchase-label">
          CUSTOMER PO
        </span>

        <span className="purchase-po">
          N/A
        </span>

      </div>

      {/* Right */}

      <div className="purchase-header-right">

        <Button>
          SAVE
        </Button>

        <Button variant="secondary">
          SEARCH BY...
        </Button>

        <Input value="211058" />

        <Button>
          GO
        </Button>

        <Button variant="secondary">
          Export
        </Button>

        <Button variant="secondary">
          Import
        </Button>

      </div>

    </div>

  );

}

export default PurchaseHeader;