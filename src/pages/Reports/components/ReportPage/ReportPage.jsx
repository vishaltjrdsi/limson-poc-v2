import { useState } from "react";

import {
  SectionCard,
  Tabs,
  Button,
  AgGridTable,
} from "../../../../components/common";


import "./ReportPage.css";

function ReportPage({ config }) {

  const [activeTab, setActiveTab] = useState(
    config.tabs[0].id
  );

  const currentTab = config.tabs.find(
    (tab) => tab.id === activeTab
  );

  return (

    <SectionCard
      label="ANALYTICS"
      title={config.title}
      actions={
        <div className="report-actions">

          <label className="report-grid-toggle">

            <span>
              OPEN REPORTS AS GRIDS
            </span>

            <input type="checkbox" />

          </label>

          <Button variant="secondary">
            Clear All Parameters
          </Button>

        </div>
      }
    >

      <Tabs
        tabs={config.tabs.map(tab => tab.label)}
        activeTab={currentTab.label}
        onChange={(label) => {

          const tab = config.tabs.find(
            t => t.label === label
          );

          setActiveTab(tab.id);

        }}
      />

      <AgGridTable
    rowData={currentTab.data}
    columnDefs={currentTab.columns}
    pagination={false}
    autoHeight
/>

    </SectionCard>

  );

}

export default ReportPage;