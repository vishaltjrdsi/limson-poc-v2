import {
  Card,
  Input,
  Select,
} from "../../../../components/common";

function AdditionalFieldsCard() {

  return (

    <Card>

      <h3 className="item-card-title">
        Additional Fields
      </h3>

      <div className="item-version-grid">

        <Select
          label="L/C/P"
          options={[]}
        />

        <Input label="UPC" />

        <Input label="SCC" />

        <Input label="TSPC" />

        <Select
          label="ACTIVE"
          options={[]}
        />

        <Input label="UUCC" />

        <Input label="TEMP" />

        <Select
          label="INV LOCATOR - OUTAGE FOR"
          options={[]}
        />

        <Input label="SAFETY STOCK UNC" />

        <Select
          label="BUYER"
          options={[]}
        />

      </div>

    </Card>

  );

}

export default AdditionalFieldsCard;