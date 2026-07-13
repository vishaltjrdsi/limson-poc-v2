import "./FormGrid.css";

function FormGrid({
  children,
  columns = 2,
}) {
  return (
    <div
      className="form-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
}

export default FormGrid;