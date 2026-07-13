import {
  Page,
  SectionCard,
  Card,
  Button,
  Input,
  Select,
  AgGridTable,
} from "../../components/Common";

import columns from "./columns";
import mockData from "./mockData";

import "./BackupAccess.css";

function BackupAccess() {
  return (
    <Page variant="form">
      <SectionCard
        label="BACKUP ACCESS"
        title="Request delegated access"
        description="Request, review, and approve delegated backup access for users during specific time periods."
      >
        <div className="backup-access-grid">

          {/* Left Card */}

          <Card padding="large">
<div className="backup-card-header">
            <span className="backup-card-label">
              BACKUP USER
            </span>

  <Button>
      Submit Request
    </Button>
</div>
            <div className="backup-form-grid">

              <Select
                label="BACKUP USER"
                options={[
                  {
                    label: "Select backup user",
                    value: "",
                  },
                ]}
              />

              <Select
                label="ROLE COVERAGE"
                options={[
                  {
                    label: "Select role",
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

          </Card>

          {/* Right Card */}

          <Card padding="none">

            <div className="backup-actions">

              <div>

                <span className="backup-card-label">
                  APPROVALS
                </span>

                <h3>Pending approvals</h3>

              </div>

              <span className="pending-chip">
                2 pending
              </span>

            </div>

            <AgGridTable
              rowData={mockData}
              columnDefs={columns}
              pagination={false}
              autoHeight
            />

          </Card>

        </div>

      </SectionCard>
    </Page>
  );
}

export default BackupAccess;
