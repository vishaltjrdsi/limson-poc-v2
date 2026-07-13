import "./PageContainer.css";
import {Card} from "../../components/common";

function PageContainer({
  title,
  subtitle,
  description,
  headerRight,
  children,
}) {
  return (
    <Card className="page-container">
      <div className="page-container-header">

        <div className="page-container-title">
          <h1>{title}</h1>

          {subtitle && <h3>{subtitle}</h3>}

          {description && <p>{description}</p>}
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
