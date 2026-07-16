import { useState } from "react";

import {
  Page,
  SectionCard,
  Select,
  Tabs,
  Button,
  DynamicForm,
} from "../../../components/common";

import businessPartnerFields from "./businessPartnerFields";
import businessPartnerTabs from "./businessPartnerTabs";

import "./BusinessPartners.css";

function BusinessPartners() {
  const [activeTab, setActiveTab] = useState(
    "General Information"
  );

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        {/* Partner Selection */}

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

        {/* Tabs */}

        <div className="bp-tabs">

          <Tabs
            tabs={businessPartnerTabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

        </div>

        {/* General Information */}

        {activeTab === "General Information" && (

          <>

            {/* Status */}

            <div className="bp-status-section">

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Active
              </label>

              <label>
                <input
                  type="checkbox"
                  defaultChecked
                />
                Approved
              </label>

              <label>
                <input type="checkbox" />
                Client Hold
              </label>

              <label>
                <input type="checkbox" />
                PO EDI
              </label>

              <label>
                <input type="checkbox" />
                Ship To EDI
              </label>

              <label>
                <input type="checkbox" />
                Freight EDI
              </label>

              <label>
                <input type="checkbox" />
                E-Invoice
              </label>

              <label>
                <input type="checkbox" />
                Ack Exempt
              </label>

            </div>

            {/* Producer */}

            <div className="bp-producer-row">

              <Button variant="secondary">
                Producer
              </Button>

            </div>

            {/* Form */}

            <DynamicForm
              fields={businessPartnerFields}
              values={formData}
              onChange={handleChange}
            />

            {/* Notes */}

            <div className="bp-notes">

              <label className="bp-label">
                NOTES
              </label>

              <textarea
                className="bp-notes-textarea"
                rows={5}
                placeholder="Enter notes..."
              />

            </div>

            {/* Footer */}

            <div className="bp-footer">

              <Button variant="secondary">
                New Contact
              </Button>

              <Button variant="secondary">
                Contact Report
              </Button>

              <Button variant="secondary">
                Vendors
              </Button>

              <Button variant="secondary">
                Cost
              </Button>

              <Button variant="secondary">
                W-N
              </Button>

            </div>

          </>

        )}

        {activeTab === "Business" && (

          <div className="coming-soon-card">

            <div className="coming-soon-label">
              BUSINESS
            </div>

            <h2>
              Coming Soon
            </h2>

            <p>
              This section is under development.
            </p>

          </div>

        )}

        {activeTab === "Edit Address" && (

          <div className="coming-soon-card">

            <div className="coming-soon-label">
              EDIT ADDRESS
            </div>

            <h2>
              Coming Soon
            </h2>

            <p>
              This section is under development.
            </p>

          </div>

        )}

      </SectionCard>
    </Page>
  );
}

export default BusinessPartners;