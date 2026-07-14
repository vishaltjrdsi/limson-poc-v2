import "./PermissionCellRenderer.css";

function PermissionCellRenderer({ value }) {
  return (
    <input
      className="permission-checkbox"
      type="checkbox"
      checked={value}
      readOnly
    />
  );
}

export default PermissionCellRenderer;