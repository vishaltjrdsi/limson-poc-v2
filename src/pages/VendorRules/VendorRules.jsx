import {
  Page,
  Button,
  Select,
} from "../../components/common";

import PageContainer from "../../containers/PageContainer/PageContainer";

import "./VendorRules.css";

function VendorRules() {
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

        <div className="vendor-form">

          <Select
            label="VENDOR"
            placeholder="Select vendor"
            options={[]}
          />

          <Select
            label="COST TYPE"
            placeholder="Select type"
            options={[]}
          />

        </div>

        <div className="vendor-actions">

          <Button>
            Add Rule
          </Button>

          <Button variant="secondary">
            Import Defaults
          </Button>

        </div>

        <div className="vendor-empty">

          No cost rules yet. Add the first rule after selecting a vendor and cost type.

        </div>

      </PageContainer>

    </Page>
  );
}

export default VendorRules;