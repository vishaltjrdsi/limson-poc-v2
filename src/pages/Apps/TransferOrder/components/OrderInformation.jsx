import {
  Card,
  Input,
  Select,
  Button,
} from "../../../../components/common";

function OrderInformation() {
  return (
    <>

<div className="transfer-header">

  <div className="transfer-header-fields">

    <Input
      label="LOOK UP"
      value="KO3771"
    />

    <Input
      label="DATE"
      type="date"
      value="2026-04-21"
    />

    <Input
      label="TO #"
      value="KO3771"
    />

  </div>

  <Button>
    Save
  </Button>

</div>
      <Card>



        <div className="transfer-location-grid">

          {/* Ship From */}

          <div className="transfer-panel">

            <h3 className="transfer-card-title">
              Ship From
            </h3>

            <Input value="CRANE/CG" disabled />

            <Input
              value="CRANE - CINCINNATI"
              disabled
            />

            <Input
              value="HEBRON, KY"
              disabled
            />

          </div>

          {/* Ship To */}

          <div className="transfer-panel">

            <h3 className="transfer-card-title">
              Ship To
            </h3>

            <Select
              value="CRANE-MT"
              options={[
                {
                  label: "CRANE-MT",
                  value: "CRANE-MT",
                },
              ]}
            />

            <Input
              value="Picklist (ID)"
              disabled
            />

            <Input
              value="CRANE - YORK"
              disabled
            />

            <Input
              value="YORK, PA"
              disabled
            />

          </div>

        </div>

      </Card>

      <div className="transfer-form-grid">

        <Input
          label="SHIP DATE"
          type="date"
          value="2026-06-20"
        />

        <Input
          label="DELIVERY DATE"
          type="date"
          value="2026-06-21"
        />

        <Input
          label="WHSE RECEIPT"
          value="CRANEMOT"
        />

        <Select
          label="TRUCKER"
          options={[
            {
              label: "CRANETRUCK",
              value: "CRANETRUCK",
            },
          ]}
        />

        <Select
          label="SPECIAL INSTRUCTION"
          options={[
            {
              label: "None",
              value: "None",
            },
          ]}
        />

        <Select
          label="CURRENCY"
          options={[
            {
              label: "USD",
              value: "USD",
            },
          ]}
        />

      </div>

    </>
  );
}

export default OrderInformation;