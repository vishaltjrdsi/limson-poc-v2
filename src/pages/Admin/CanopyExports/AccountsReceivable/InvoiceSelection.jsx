import { useState } from "react";

import {
  Card,
  Button,
  Input,
  AgGridTable,
} from "../../../../components/common";

import invoiceColumns from "./invoiceColumns";
import invoiceMockData from "./invoiceMockData";

function InvoiceSelection() {

  const [rowData] = useState(invoiceMockData);

  return (

    <Card padding="none">

      <div className="ar-toolbar">

        <h3>
          AR Invoice Selection
        </h3>

        <div className="ar-toolbar-actions">

          <Button variant="secondary">
            Express Process
          </Button>

          <Input
            label="STARTING INVOICE NO"
            placeholder=""
          />

          <Button>
            Start Over
          </Button>

        </div>

      </div>

      <AgGridTable
        rowData={rowData}
        columnDefs={invoiceColumns}
        pagination={false}
        autoHeight
      />

    </Card>

  );
}

export default InvoiceSelection;