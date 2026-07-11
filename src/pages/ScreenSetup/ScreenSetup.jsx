import { useState } from "react";
import "./ScreenSetup.css";

import PageContainer from "../../containers/PageContainer/PageContainer";
import FormGrid from "../../components/Common/FormGrid/FormGrid";
import Select from "../../components/Common/Select/Select";
import Button from "../../components/Common/Button/Button";
import Page from "../../components/Common/Page/Page";
import screenSetupFields from "../../config/forms/screenSetupFields";

function ScreenSetup() {
  const [filters, setFilters] = useState({
    module: "",
    screenGroup: "",
    screenName: "",
  });

  const handleChange = ({ target: { name, value } }) => {
  setFilters((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  return (
     <Page>
    <PageContainer
      title="SCREEN SETUP"
      subtitle="Configuration filter panel"
      description="Configure screen mappings and permissions by filtering through available modules and screen groups."
    >
     
     <FormGrid columns={1}>
  {screenSetupFields.map((field) => (
    <Select
  key={field.name}
  label={field.label}
  name={field.name}
  value={filters[field.name]}
  placeholder={field.placeholder}
  options={field.options}
  onChange={handleChange}
/>
  ))}
</FormGrid>

      <div className="screen-actions">
        <Button variant="secondary">
          Clear Filters
        </Button>

        <Button>
          Apply Filters
        </Button>
      </div>

      <div className="empty-state">
        No screen configuration found for the selected filters. Choose a module or create a new screen mapping.
      </div>
    </PageContainer>
    </Page>
  );
}

export default ScreenSetup;
