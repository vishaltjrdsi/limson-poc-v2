import { useState } from "react";
import PageContainer from "../../containers/PageContainer/PageContainer"
import {
  Page,
  FormGrid,
  Select,
  Button
} from "../../components/common";
import "./VendorRules.css";

function VendorRules() {
  const [formData, setFormData] = useState({
    vendor: "",
    costType: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Page>
      <PageContainer
        title="VENDOR RULES"
        subtitle="Costs rule editor"
        description="Manage and configure vendor-specific cost rules and default settings."
        headerRight={
          <Button>
            Save Rules
          </Button>
        }
      >
        <FormGrid>

          <Select
            label="Vendor"
            name="vendor"
            placeholder="Select vendor"
            value={formData.vendor}
            onChange={handleChange}
            options={[]}
          />

          <Select
            label="Cost Type"
            name="costType"
            placeholder="Select type"
            value={formData.costType}
            onChange={handleChange}
            options={[]}
          />

        </FormGrid>

        <div className="vendor-actions">

          <Button>
            Add Rule
          </Button>

          <Button variant="secondary">
            Import Defaults
          </Button>

        </div>

        <div className="vendor-empty-state">
          No cost rules yet. Add the first rule after selecting a vendor and cost type.
        </div>

      </PageContainer>
    </Page>
  );
}

export default VendorRules;
