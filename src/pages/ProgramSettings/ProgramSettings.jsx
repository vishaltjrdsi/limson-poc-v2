import { useState } from "react";
import PageContainer from "../../containers/PageContainer/PageContainer";
import programSettingsForm from "../../config/forms/programSettingsForm";
import {
  Tabs,
  DynamicForm,
  FooterBar,
  Page
} from "../../components/common";

import "./ProgramSettings.css";

function ProgramSettings() {
  const [activeTab, setActiveTab] = useState("General");

 const [formData, setFormData] = useState({
  company: "",
  companyName: "",
  address1: "",
  mainEmail: "",
  phone: "",
  dunsNumber: "",
});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving...", formData);

    // TODO: API Call
    alert("Settings Saved Successfully");
  };
 
  return (
     <Page>
      <PageContainer
        title="PROGRAM SETTINGS"
        subtitle="Company Configuration"
        description="Manage company information and default application settings."
        headerRight={
        <span className="unsaved-text">
            Unsaved Changes
        </span>
    }
      >
        <Tabs
          tabs={[
            "General",
            "Additional Information",
            "Additional Settings",
          ]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {activeTab === "General" && (
          <DynamicForm
            fields={programSettingsForm}
            values={formData}
            onChange={handleChange}
          />
        )}

        {activeTab === "Additional Information" && (
          <div className="tab-placeholder">
            <h3>Additional Information</h3>
            <p>This section will be implemented later.</p>
          </div>
        )}

        {activeTab === "Additional Settings" && (
          <div className="tab-placeholder">
            <h3>Additional Settings</h3>
            <p>This section will be implemented later.</p>
          </div>
        )}

        <FooterBar
          editedCount={0}
          buttonText="Save Settings"
          onSave={handleSave}
        />
      </PageContainer>
    </Page>
  );
}

export default ProgramSettings;
