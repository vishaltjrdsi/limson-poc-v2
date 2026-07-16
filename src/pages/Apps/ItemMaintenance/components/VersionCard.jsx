import {
  Card,
  Input,
} from "../../../../components/common";

function VersionCard({ title }) {

  return (

    <Card>

      <h3 className="item-card-title">
        {title}
      </h3>

      <div className="item-version-grid">

        <Input label="BASE WGT" />

        <Input label="GR WGT" />

        <Input label="TI" />

        <Input label="HI" />

        <Input label="CTN SYZ" />

        <Input label="PLT CNFG" />

        <Input label="LENGTH" />

        <Input label="WIDTH" />

        <Input label="HEIGHT" />

        <Input label="CUBE" />

      </div>

    </Card>

  );

}

export default VersionCard;