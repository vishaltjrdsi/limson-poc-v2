import {
  Page,
  SectionCard,
  Card,
  Button,
  Input,
  Select,
  AgGridTable,
} from "../../components/common";

import columns from "./columns";
import mockData from "./mockData";

import "./RolesManagement.css";

function RolesManagement() {
  return (
    <Page variant="form">
      <SectionCard
        label="USERS & ROLES"
        title="Roles Management"
      >
        {/* Tabs */}
        <div className="roles-tabs">
          <Button
    variant="tab"
    className="active"
>
    Temp Access
</Button>

<Button variant="tab">
    Role Access
</Button>

<Button variant="tab">
    Screen Setup
</Button>
        </div>

        {/* Two Column Layout */}
        <div className="roles-grid">

          {/* Left Card */}
          <Card padding="large">

            <span className="roles-card-label">
              MANAGER BACKUP SETUP
            </span>

            <div className="roles-form-grid">

              <Input
                label="USER SELECT"
                placeholder="Search user..."
              />

              <Select
                label="REPLACEMENT USER"
                options={[
                  {
                    label: "Select Replacement",
                    value: "",
                  },
                ]}
              />

              <Input
                label="START DATE"
                type="date"
              />

              <Input
                label="END DATE"
                type="date"
              />

            </div>

            <Button>
              Submit Backup
            </Button>

          </Card>

          {/* Right Card */}
          <Card padding="none">

            <div className="roles-actions">

              <span className="roles-card-label">
                PENDING APPROVALS
              </span>

            </div>

            <AgGridTable
              rowData={mockData}
              columnDefs={columns}
              pagination={false}
              autoHeight
            />

            <div className="roles-actions">

              <Button>
                Approve Backup
              </Button>

              <Button variant="danger">
                Reject Backup
              </Button>

            </div>

          </Card>

        </div>

      </SectionCard>
    </Page>
  );
}

export default RolesManagement;
