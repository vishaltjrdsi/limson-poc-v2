import { useState } from "react";

import {
  Page,
  SectionCard,
  Select,
  Tabs,
  Button,
} from "../../../components/common";

import businessPartnerTabs from "./businessPartnerTabs";

import "./BusinessPartners.css";

function BusinessPartners() {
  const [activeTab, setActiveTab] = useState(
    "General Information"
  );

  return (
    <Page variant="form">
      <SectionCard
        label="MASTER DATA"
        title="Business Partners"
        actions={
          <Button>
            Save Changes
          </Button>
        }
      >
        <div className="bp-partner-selection">

          <Select
            label="PARTNER SELECTION"
            options={[
              {
                label:
                  "***NO MORE INVOICES - PRICING TO BLUE SEA***",
                value: "partner1",
              },
            ]}
          />

        </div>

        <div className="bp-tabs">

          <Tabs
            tabs={businessPartnerTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

        </div>

      </SectionCard>
    </Page>
  );
}

export default BusinessPartners;