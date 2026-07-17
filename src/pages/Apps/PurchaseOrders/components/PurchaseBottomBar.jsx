import {
  Button,
  Input,
  Select,
  Checkbox,
} from "../../../../components/common";

function PurchaseBottomBar() {
  return (

    <div className="purchase-bottom">

      {/* Row 1 */}

      <div className="purchase-bottom-top">

        <div className="purchase-left-actions">

          <Button variant="secondary">
            CREDIT ITEM
          </Button>

          <Button variant="secondary">
            DELETE ITEM
          </Button>

          <Button variant="secondary">
            ALL?
          </Button>

          <Button>
            TAKE LIMSON PRICE
          </Button>

          <Button>
            TAKE VENDOR PRICE
          </Button>

          <Button>
            TAKE ALL LIMSON
          </Button>

          <Button>
            TAKE ALL VENDOR
          </Button>

        </div>

      </div>

      {/* Green Header */}

      <div className="purchase-green-header">

        <div>CODE</div>

        <div>COST</div>

        <div>VENDOR</div>

        <div>DESCRIPTION</div>

        <div>COST</div>

        <div>QTY</div>

        <div>PAL/QTY</div>

        <div>CUBE</div>

        <div>CONTAINER</div>

        <div>LINE TOTAL</div>

      </div>

      {/* Bottom Form */}

  {/* Bottom Form */}

<div className="purchase-bottom-form">

  {/* Left */}

  <div className="purchase-form-actions">

    <div className="purchase-action-buttons">

      <Button variant="secondary">
        VOID
      </Button>

      <Button variant="secondary">
        BEVERY
      </Button>

      <Select
        placeholder="DROPDOWN"
        options={[]}
      />

    </div>

    <div className="purchase-action-buttons">

      <Button>
        NEW PO
      </Button>

      <Button>
        PRINT
      </Button>

      <Button>
        HISTORY
      </Button>

      <Button>
        SHIP NOTES
      </Button>

    </div>

  </div>

  {/* User */}

  <div className="purchase-form-user">

    <Checkbox />

    <Input
      label="PRINT / SAVE BY"
      value="GEO"
    />

    <Input
      label="BOUGHT IN"
      value="GEO"
    />

  </div>

  {/* Cost */}

  <div className="purchase-form-cost">

    <Input
      label="FREIGHT"
      value="$0.00"
    />

    <Input
      label="MISC"
      value="$0.00"
    />

    <Input
      label="TOTAL"
      value="$10,832.50"
      className="purchase-total"
    />

    <Input
      label="DISCOUNT"
      value="$0.00"
    />

  </div>

  {/* Approval */}

  <div className="purchase-form-approval">

    <div className="purchase-edi-title">
      EDI PO ACK
    </div>

    <Input
      label="ACCEPTED BY"
    />

    <Input
      label="REJECTED BY"
    />

    <Input
      label="ACCEPTED ON"
    />

    <Input
      label="REJECTED ON"
    />

  </div>

</div>

    </div>

  );

}

export default PurchaseBottomBar;