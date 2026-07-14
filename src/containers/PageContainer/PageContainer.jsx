import "./PageContainer.css";
import { Card } from "../../components/common";

function PageContainer({
  title,
 subtitle,
  description,
  headerRight,
  children,
}) {
  return (
    <Card
      className="page-container"
      padding="none"
    >
      <div className="page-container-header">

        <div className="page-container-title">

          <div className="page-title">
            {title}
          </div>

          {subtitle && (
            <div className="page-subtitle">
              {subtitle}
            </div>
          )}

          {description && (
            <div className="page-description">
              {description}
            </div>
          )}

        </div>

        {headerRight && (
          <div className="page-container-header-right">
            {headerRight}
          </div>
        )}

      </div>

      <div className="page-container-body">
        {children}
      </div>

    </Card>
  );
}

export default PageContainer;