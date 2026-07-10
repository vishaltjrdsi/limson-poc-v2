import Card from "../Card";
import "./SectionCard.css";

function SectionCard({
  label,
  title,
  description,
  actions,
  children,
  footer,
}) {
  return (
    <Card padding="large">

      <div className="section-card-top">

        <span className="section-card-label">
          {label}
        </span>

        {actions && (
          <div className="section-card-actions">
            {actions}
          </div>
        )}

      </div>

      <h2 className="section-card-title">
        {title}
      </h2>

      {description && (
        <p className="section-card-description">
          {description}
        </p>
      )}

      <div className="section-card-body">
        {children}
      </div>

      {footer && (
        <div className="section-card-footer">
          {footer}
        </div>
      )}

    </Card>
  );
}

export default SectionCard;