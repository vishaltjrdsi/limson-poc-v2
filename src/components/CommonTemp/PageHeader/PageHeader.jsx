import "./PageHeader.css";

function PageHeader({
  title,
  subTitle,
  description,
  children,
}) {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <h1>{title}</h1>

        {subTitle && <h2>{subTitle}</h2>}

        {description && <p>{description}</p>}
      </div>

      {children && (
        <div className="page-header-right">
          {children}
        </div>
      )}
    </div>
  );
}

export default PageHeader;