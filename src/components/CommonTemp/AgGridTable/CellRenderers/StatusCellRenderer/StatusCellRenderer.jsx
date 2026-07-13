import "./StatusCellRenderer.css";

function StatusCellRenderer({ value }) {
  const statusClass =
    value === "Active"
      ? "status-active"
      : "status-inactive";

  return (
    <span className={`status-pill ${statusClass}`}>
      {value}
    </span>
  );
}

export default StatusCellRenderer;