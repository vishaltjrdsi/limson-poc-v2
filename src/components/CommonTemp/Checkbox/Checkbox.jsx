import "./Checkbox.css";

function Checkbox({
  label,
  checked,
  name,
  disabled = false,
  onChange,
}) {
  return (
    <label className="checkbox">

      <input
        type="checkbox"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />

      {label && (
        <span>{label}</span>
      )}

    </label>
  );
}

export default Checkbox;