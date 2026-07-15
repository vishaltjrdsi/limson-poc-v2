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

      <div className="invoice-toolbar">

        <h3>AP Invoice Selection</h3>

        <Button variant="secondary">
          Express Process
        </Button>

      </div>

      <AgGridTable
        rowData={rowData}
        columnDefs={invoiceColumns}
        pagination={false}
        autoHeight
      />

     <div className="invoice-footer">

    <label className="invoice-file-label">
        FILENAME
    </label>

    <input
        className="invoice-file-input"
        value="name.txt"
        readOnly
    />

    <Button>
        Invoice CX
    </Button>

</div>

    </Card>
  );
}

export default InvoiceSelection;