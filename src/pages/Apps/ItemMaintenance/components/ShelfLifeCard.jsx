import {
  Card,
  Input,
  Select,
} from "../../../../components/common";

function ShelfLifeCard() {

  return (

    <Card>

      <h3 className="item-card-title">
        Shelf Life Notes
      </h3>

      <div className="item-version-grid">

        <Input
          label="FOR PRODUCT CODE"
        />

        <Select
          label="VLM CONDITION"
          options={[]}
        />

        <Input
          label="FROZEN"
        />

        <Input
          label="PROD INFO"
        />

      </div>

    </Card>

  );

}

export default ShelfLifeCard;