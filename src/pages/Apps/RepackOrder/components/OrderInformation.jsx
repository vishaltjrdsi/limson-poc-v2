import {
  Card,
  Input,
  Select
} from "../../../../components/common";

function OrderInformation() {
  return (
    <>

      {/* Header */}


      {/* Source / Packer */}

      <div className="repack-top-grid">

        <div>

          <Select
            label="SOURCE"
            value="267390"
            options={[
              {
                label: "267390",
                value: "267390",
              },
            ]}
          />

          <small className="repack-helper">
            US COLD STORAGE PLANT 1, LAREDO, TX
          </small>

        </div>

        <div>

          <Select
            label="PACKER"
            value="4584190"
            options={[
              {
                label: "4584190",
                value: "4584190",
              },
            ]}
          />

          <small className="repack-helper">
            DRISCOLL'S-DRISCOLL'S AMER, OC
          </small>

        </div>

      </div>

      {/* ONE Card */}

          <Card>

  <div className="repack-card-grid">

    {/* Left */}

    <div className="repack-panel">

      <h3 className="repack-card-title">
        Source Item
      </h3>

      <Input
        label="SOURCE QTY"
        value="1170"
      />

      <Input
        label="REC DATE"
        type="date"
        value="2026-06-05"
      />

      <Input
        label="DESCRIPTION"
        value="STRAWBERRY DICED"
      />

    </div>

    {/* Right */}

    <div className="repack-panel">

      <h3 className="repack-card-title">
        Result Item
      </h3>

      <Input
        label="RESULT QTY"
        value="1364"
      />

      <Input
        label="REPACK TO"
        value="267390"
      />

      <Input
        label="DESCRIPTION"
        value="STRAWBERRY DICED FZN 2×4 LB"
      />

    </div>

  </div>

</Card>

      <div className="repack-notes">

        <label className="input-label">
          NOTES
        </label>

        <textarea
          className="repack-notes-textarea"
          rows={3}
        />

      </div>

    </>
  );
}

export default OrderInformation;