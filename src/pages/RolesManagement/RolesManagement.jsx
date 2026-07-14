import { useState } from "react";

import {
  Page,
  SectionCard,
  Card,
  Tabs,
} from "../../components/common";

import TempAccess from "./TempAccess/TempAccess";
import RoleAccess from "./RoleAccess/RoleAccess";
import ScreenSetup from "./ScreenPermissions/ScreenPermissions";

import "./RolesManagement.css";

function RolesManagement() {

  const [tab, setTab] =
    useState("Temp Access");

  const renderContent = () => {

    switch (tab) {

      case "Temp Access":
        return <TempAccess />;

      case "Role Access":
        return <RoleAccess />;

      case "Screen Setup":
        return <ScreenSetup />;

      default:
        return null;

    }

  };

  return (

    <Page variant="form">

      <SectionCard
        label="USERS & ROLES"
        title="Roles Management"
      >

        <Tabs
          tabs={[
            "Temp Access",
            "Role Access",
            "Screen Setup",
          ]}
          activeTab={tab}
          onChange={setTab}
        />

        {renderContent()}

      </SectionCard>

    </Page>

  );

}

export default RolesManagement;