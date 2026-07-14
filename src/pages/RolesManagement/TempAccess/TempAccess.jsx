import {
  Card,
  Button,
  Input,
  Select,
  AgGridTable,
} from "../../../components/common";

import columns from "./tempAccessColumns";
import mockData from "./tempAccessMockData";

import "./TempAccess.css";

function TempAccess() {
  return (
    <div className="temp-grid">

      {/* Left Card */}

   <Card padding="none">

    <div className="temp-card-header">
        MANAGER BACKUP SETUP
    </div>

    <div className="temp-card-body">

        <div className="temp-form-grid">

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

    </div>

    <div className="temp-actions">

        <Button>
            Submit Backup
        </Button>

    </div>

</Card>

      {/* Right Card */}

      <Card 
      padding="none"
      className="temp-grid-card"
      >

    <div className="temp-card-header">
        PENDING APPROVALS
    </div>

<div className="temp-grid-wrapper">
    <AgGridTable
        columnDefs={columns}
        rowData={mockData}
        pagination={false}
        autoHeight
    />
</div>
    <div className="temp-actions">

        <Button>
            Approve Backup
        </Button>

        <Button variant="danger">
            Reject Backup
        </Button>

    </div>

</Card>
    </div>
  );
}

export default TempAccess;