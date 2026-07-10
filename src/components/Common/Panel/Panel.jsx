import Card from "../Card";
import "./Panel.css";

function Panel({
  label,
  title,
  children,
}) {
  return (
    <Card padding="none">

      <div className="panel-header">

        <span className="panel-label">
          {label}
        </span>

        <h3 className="panel-title">
          {title}
        </h3>

      </div>

      <div className="panel-body">
        {children}
      </div>

    </Card>
  );
}

export default Panel;