import { useState } from "react";

import PageContainer from "../../containers/PageContainer/PageContainer";

import { Tabs, FooterBar, Page } from "../../components/common";

import GeneralTab from "./tabs/GeneralTab";
import AdditionalInformationTab from "./tabs/AdditionalInformationTab";
import AdditionalSettingsTab from "./tabs/AdditionalInformationTab";

import "./ProgramSettings.css";

function ProgramSettings() {
  const [activeTab, setActiveTab] = useState("General");

  const [formData, setFormData] = useState({
    /* General */

    company: "",
    companyName: "",
    address1: "",
    mainEmail: "",
    phone: "",
    dunsNumber: "",

    /* Additional Information */

    website: "",
    fax: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
    country: "",

    /* Additional Settings */

    language: "en",
    currency: "USD",

    emailNotifications: false,
    requireApproval: false,
    allowNegativeInventory: false,
    auditLogging: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log(formData);

    alert("Settings Saved Successfully");
  };

  const renderTab = () => {
    switch (activeTab) {
      case "General":
        return <GeneralTab formData={formData} handleChange={handleChange} />;

      case "Additional Information":
        return (
          <AdditionalInformationTab
            formData={formData}
            handleChange={handleChange}
          />
        );

      case "Additional Settings":
        return (
          <AdditionalSettingsTab
            formData={formData}
            handleChange={handleChange}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Page>
      <PageContainer
        title="PROGRAM SETTINGS"
        subtitle="Company Configuration"
        description="Manage company information and default application settings."
        headerRight={<span className="unsaved-text">Unsaved Changes</span>}
      >
        <Tabs
          variant="pill"
          tabs={["General", "Additional Information", "Additional Settings"]}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {renderTab()}

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
