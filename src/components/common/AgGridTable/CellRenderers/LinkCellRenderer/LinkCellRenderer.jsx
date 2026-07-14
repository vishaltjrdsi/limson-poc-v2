import "./LinkCellRenderer.css";

function LinkCellRenderer({ value }) {
  return (
    <span className="report-link">
      {value}
    </span>
  );
}

export default LinkCellRenderer;