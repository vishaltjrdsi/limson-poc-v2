import { useState } from "react";

import {
  Page,
  SectionCard,
  Tabs,
  ReportTable,
  Button,
  Checkbox,
} from "../index";

function ReportPage({
  label,
  title,
  tabs,
  columns,
  data,
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [openGrid, setOpenGrid] = useState(false);

  return (
    <Page>

      <SectionCard
        label={label}
        title={title}
        actions={
          <div className="report-actions">

            <Checkbox
              checked={openGrid}
              onChange={(e) =>
                setOpenGrid(e.target.checked)
              }
            >
              Open Reports As Grids
            </Checkbox>

            <Button variant="secondary">
              Clear All Parameters
            </Button>

          </div>
        }
      >

        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

       <ReportTable
    columns={columns}
    data={data[activeTab]}
/>

      </SectionCard>

    </Page>
  );
}

export default ReportPage;