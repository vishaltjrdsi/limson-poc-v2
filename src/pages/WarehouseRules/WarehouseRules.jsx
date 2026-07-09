import { useState } from "react";

import Page from "../../components/common/Page/Page";
import PageContainer from "../../containers/PageContainer/PageContainer";
import Select from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";
import RuleCard from "../../components/common/RuleCard/RuleCard";

import "./WarehouseRules.css";

function WarehouseRules() {
  const [warehouse, setWarehouse] = useState("");

  return (
    <Page>
      <PageContainer
        title="WAREHOUSE RULES"
        subtitle="Three rule systems under one warehouse context"
        description="Define and manage warehouse policies, including in-out rules and handling requirements for different facilities."
        headerRight={
          <div className="warehouse-header-actions">
            <Select
              name="warehouse"
              value={warehouse}
              placeholder="Select warehouse"
              options={[
                {
                  value: "warehouse1",
                  label: "Warehouse 1",
                },
                {
                  value: "warehouse2",
                  label: "Warehouse 2",
                },
              ]}
              onChange={(e) => setWarehouse(e.target.value)}
            />

            <Button>
              Save All Changes
            </Button>
          </div>
        }
      >
        <div className="warehouse-rules-grid">

          <RuleCard
            title="Warehouse Rules"
            buttonText="Add Rule"
            emptyMessage="No warehouse rules defined."
          />

          <RuleCard
            title="In-Out Rules"
            buttonText="Add Rule"
            emptyMessage="No in-out rules defined."
          />

          <RuleCard
            title="Handling Rules"
            buttonText="Add Rule"
            emptyMessage="No handling rules defined."
          />

        </div>
      </PageContainer>
    </Page>
  );
}

export default WarehouseRules;