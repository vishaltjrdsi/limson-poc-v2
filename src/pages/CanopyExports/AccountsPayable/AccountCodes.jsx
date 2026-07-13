import { useState } from "react";

import {
  Card,
  Button,
  Input,
  AgGridTable,
} from "../../../components/Common";

import accountColumns from "./accountColumns";
import accountMockData from "./accountMockData";

function AccountCodes() {

  const [rowData] = useState(accountMockData);

  return (

    <div className="canopy-grid">

      <Card padding="none">

        <AgGridTable
          rowData={rowData}
          columnDefs={accountColumns}
          pagination={false}
          autoHeight
        />

      </Card>

      <Card padding="large">

        <h3 className="canopy-form-title">
          Add Record
        </h3>

        <div className="canopy-form">

          <Input
            label="RECORD NUMBER"
          />

          <Input
            label="ACCOUNT NAME"
          />

          <Input
            label="ACCOUNT NUMBER"
          />

          <Button>
            Add Record
          </Button>

        </div>

      </Card>

    </div>

  );
}

export default AccountCodes;