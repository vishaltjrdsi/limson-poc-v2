import { Input } from "../../../../../../../components/common";

function TenPlusTwoField({ field, value }) {
  return (
    <div className="tenplus2-field">
      <div className="tenplus2-label">
        {field.label}
      </div>

      <Input
        label=""
        type={field.type}
        value={value}
      />
    </div>
  );
}

export default TenPlusTwoField;