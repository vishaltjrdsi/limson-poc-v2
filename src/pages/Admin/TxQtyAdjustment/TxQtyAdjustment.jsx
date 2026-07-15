import { useState } from "react";
import { Page, SectionCard, Card, Button, 
  Input, InfoBox, AgGridTable} from "../../../components/common";


import txQtyAdjustmentData from "../../../mock/txQtyAdjustmentData";

import "./TxQtyAdjustment.css";

const columnDefs = [
  {
    headerName: "TXID",
    field: "txId",
    width: 90,
  },
  {
    headerName: "TX QTY",
    field: "qty",
    width: 90,
  },
  {
    headerName: "TX WGT",
    field: "weight",
    width: 90,
  },
  {
    headerName: "UNIT VALUE",
    field: "unitValue",
    width: 120,
  },
  {
    headerName: "TX VALUE",
    field: "txValue",
    width: 120,
  },
  {
    headerName: "VALUE DIFF",
    field: "difference",
    width: 120,
  },
  {
    headerName: "DESCRIPTION",
    field: "description",
    width: 180,
  },
  {
    headerName: "EFF DATE",
    field: "effectiveDate",
    width: 120,
  },
];

function TxQtyAdjustment() {
  const [txId, setTxId] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleSearch = () => {
    const result = txQtyAdjustmentData.filter((item) =>
      item.txId.toLowerCase().includes(txId.toLowerCase())
    
    );

    setTransactions(result);
  };

  return (
    <Page variant="form">
      <div className="tx-adjustment-grid">

        {/* LEFT CARD */}

        <SectionCard
          label="TX QTY ADJUSTMENT"
          title="Search first, adjust second"
          description="Search for specific transactions to review details and perform quantity adjustments."
          footer={
            <Button onClick={handleSearch}>
              Search
            </Button>
          }
        >
          <Input
            placeholder="Enter TXID"
            value={txId}
            onChange={(e) => setTxId(e.target.value)}
          />

          {transactions.length === 0 && (
            <InfoBox>
              No transaction loaded yet. Search by TXID to review quantity,
              weight, value and effective dates before enabling adjustment.
            </InfoBox>
          )}
        </SectionCard>

        {/* RIGHT CARD */}

        <Card padding="none">

          <div className="tx-preview-header">

            <div>

              <span className="tx-preview-label">
                ADJUSTMENT PREVIEW
              </span>

              <h3 className="tx-preview-title">
                Transaction details
              </h3>

            </div>

            <Button variant="secondary">
              Save Adjustment
            </Button>

          </div>

          <AgGridTable
            columnDefs={columnDefs}
            rowData={transactions}
            pagination={false}
            autoHeight
          />

        </Card>

      </div>
    </Page>
  );
}

export default TxQtyAdjustment;
