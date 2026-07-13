import "./CheckboxCellRenderer.css";

function CheckboxCellRenderer({ value }) {
  return (
    <input
      type="checkbox"
      checked={value}
      readOnly
      className="spot-checkbox"
    />
  );
}

export default CheckboxCellRenderer;