import {
  Card,
  Button,
  Input,
  Select,
  AgGridTable,
} from "../../../components/common";

import columns from "./roleAccessColumns";
import mockData from "./roleAccessMockData";

import "./RoleAccess.css";

function RoleAccess() {
  return (
    <div className="role-access">
      {/* Left Panel */}

      <Card className="role-definition-card" padding="none">
        <div className="card-header">ROLE DEFINITION</div>

        <div className="card-content">
          <div className="role-form">
            <Select
              label="ROLE GROUPS"
              placeholder="Select Role Group"
              options={[
                {
                  label: "Administrator",
                  value: "admin",
                },
                {
                  label: "Sales",
                  value: "sales",
                },
              ]}
            />

            <Input label="NAME" placeholder="Role Name" />

            <div className="full-width">
              <Input label="DESCRIPTION" placeholder="Description" />
            </div>

            <Select
              label="SUBORDINATE ROLE 1"
              placeholder="Select Role"
              options={[
                {
                  label: "None",
                  value: "",
                },
              ]}
            />

            <Select
              label="SUBORDINATE ROLE 2"
              placeholder="Select Role"
              options={[
                {
                  label: "None",
                  value: "",
                },
              ]}
            />
          </div>
        </div>

        <div className="card-footer">
          <Button variant="secondary">Clear Subs</Button>

          <Button>Save Role</Button>
        </div>
      </Card>

      {/* Right Panel */}

      <Card className="role-rules-card" padding="none">
        <div className="card-header">ACCESS RULES</div>

        <div className="rules-table">
          <AgGridTable
    rowData={mockData}
    columnDefs={columns}
    pagination={false}
    autoHeight
/>
        </div>
      </Card>
    </div>
  );
}

export default RoleAccess;
