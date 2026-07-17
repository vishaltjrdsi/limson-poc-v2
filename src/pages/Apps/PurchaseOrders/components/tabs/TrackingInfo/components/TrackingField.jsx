import { Input } from "../../../../../../../components/common";

function TrackingField({
  field,
  value,
}) {
  return (
    <div className="tracking-field">
      <div className="tracking-label">
        {field.label}
      </div>

   <Input
  label=""
  type={field.type || "text"}
  value={value}
  placeholder={field.placeholder || ""}
/>
    </div>
  );
}

export default TrackingField;