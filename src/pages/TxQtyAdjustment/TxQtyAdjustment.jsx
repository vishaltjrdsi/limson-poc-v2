import { useState } from "react";

import Page from "../../components/common/Page/Page";
import SectionCard from "../../components/common/SectionCard";
import Panel from "../../components/common/Panel";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import InfoBox from "../../components/common/InfoBox";
import AgGridTable from "../../components/common/AgGridTable";

import txQtyAdjustmentData from "../../mock/txQtyAdjustmentData";

import "./TxQtyAdjustment.css";

const columnDefs = [
  {
    headerName: "TX ID",
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
    width: 220,
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
    const result = mockTransactions.filter((item) =>
      item.txId.toLowerCase().includes(txId.toLowerCase())
    );

    setTransactions(result);
  };

  return (
    <Page variant="form">
      <div className="tx-adjustment-grid">
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
              No transaction loaded yet. Search by TXID to review
              quantity, weight, value and effective dates before
              enabling adjustment.
            </InfoBox>
          )}
        </SectionCard>

        <Panel
          label="Adjustment Preview"
          title="Transaction Details"
          actions={
            <Button variant="secondary">
              Save Adjustment
            </Button>
          }
        >
          <AgGridTable
            columnDefs={columnDefs}
            rowData={transactions}
            pagination={false}
            autoHeight
          />
        </Panel>
      </div>
    </Page>
  );
}

export default TxQtyAdjustment;