import { useState } from "react";
import "./ProgramSettings.css";

import PageLayout from "../../components/common/PageLayout/PageLayout";
import Tabs from "../../components/common/Tabs/Tabs";
import DynamicForm from "../../components/common/DynamicForm/DynamicForm";
import FooterBar from "../../components/common/FooterBar/FooterBar";

import programSettingsForm from "../../config/forms/programSettingsForm";

function ProgramSettings() {
  const [activeTab, setActiveTab] = useState("General");

  const [formData, setFormData] = useState({
    company: "",
    companyName: "",
    address: "",
    email: "",
    phone: "",
    duns: "",
    country: "",
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
    <div className="program-settings">
      <PageLayout
        title="PROGRAM SETTINGS"
        subtitle="Company Configuration"
        description="Manage company information and default application settings."
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
      </PageLayout>
    </div>
  );
}

export default ProgramSettings;