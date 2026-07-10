import Card from "../Card";
import "./Panel.css";

function Panel({
  label,
  title,
  actions,
  children,
}) {
  return (
    <Card padding="none">
      {(label || title || actions) && (
        <div className="panel-headers">

          <div className="panel-header-left">
            {label && (
              <span className="panel-label">
                {label}
              </span>
            )}

            {title && (
              <h3 className="panel-title">
                {title}
              </h3>
            )}
          </div>

          {actions && (
            <div className="panel-actions">
              {actions}
            </div>
          )}

        </div>
      )}

      <div className="panel-body">
        {children}
      </div>
    </Card>
  );
}

export default Panel;