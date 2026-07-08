import "./PageLayout.css";
import Card from "../Card/Card";

function PageLayout({
  title,
  subtitle,
  description,
  children,
}) {
  return (
    <Card className="page-layout">

      <div className="page-layout-header">

        <h1>{title}</h1>

        {subtitle && (
          <h3>{subtitle}</h3>
        )}

        {description && (
          <p>{description}</p>
        )}

      </div>

      <div className="page-layout-body">
        {children}
      </div>

    </Card>
  );
}

export default PageLayout;