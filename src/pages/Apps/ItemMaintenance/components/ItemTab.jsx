import {
  Card,
  Input,
  Select,
} from "../../../../components/common";

import VersionCard from "./VersionCard";
import AdditionalFieldsCard from "./AdditionalFieldsCard";
import ShelfLifeCard from "./ShelfLifeCard";

function ItemTab() {

  return (
    <>

      {/* Item Details */}

      <Card>

        <div className="item-form-grid">

          <Input
            label="ITEM"
            value="143624"
          />

          <Input
            label="CUST 1 IC"
          />

          <div className="full-width-left">
            <Input
              label="DESCRIPTION"
            />
          </div>

          <div className="full-width">

  <label className="input-label">
    MARKETING DESCRIPTION
  </label>

  <textarea
    className="item-textarea"
    rows={3}
    placeholder="Marketing Description"
  />

</div>

          <Select
            label="CATEGORY"
            options={[
              {
                label: "COMMODITY",
                value: "commodity",
              },
            ]}
          />

          <Select
            label="BRAND"
            options={[]}
          />

          <Input
            label="COST"
          />

          <Input
            label="PACK"
          />

          <Input
            label="SIZE"
          />

          <Input
            label="PO"
          />

        </div>

      </Card>

<div className="item-version-layout">

    <VersionCard
        title="Base Version"
    />

    <VersionCard
        title="Alternate Version"
    />

</div>

<AdditionalFieldsCard />

<ShelfLifeCard />

    </>
  );

}

export default ItemTab;