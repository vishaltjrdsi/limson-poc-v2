import { Card } from "../../common";
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
    <Card padding="default">

      <div className="section-card-header">

        <div>

          {label && (
            <div className="section-card-label">
              {label}
            </div>
          )}

          <h1 className="section-card-title">
            {title}
          </h1>

          {description && (
            <div className="section-card-description">
              {description}
            </div>
          )}

        </div>

        {actions && (
          <div className="section-card-actions">
            {actions}
          </div>
        )}

      </div>

      <div className="section-card-content">

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