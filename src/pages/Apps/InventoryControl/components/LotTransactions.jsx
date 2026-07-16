import {
  Card,
  Button,
  Checkbox,
  AgGridTable,
} from "../../../../components/common";


import inventoryLotColumns from "../inventoryLotColumns";
import inventoryLotMockData from "../inventoryLotMockData";


function LotTransactions() {
  return (
    <Card className="inventory-lot-card" padding="none">

      <div className="inventory-lot-header">

        <h3>
          Lot Transactions
        </h3>

        <div className="inventory-value">

          <strong>
            Inv. Value :
          </strong>

          <span>
            $6,241.51
          </span>

        </div>

      </div>

      <AgGridTable
    rowData={inventoryLotMockData}
    columnDefs={inventoryLotColumns}
    pagination={false}
    height={250}
/>

      <div className="inventory-footer">

        <div className="inventory-footer-left">

          <Button variant="secondary">
            Lot History
          </Button>

          <Button variant="secondary">
            Set Condition
          </Button>

          <Button variant="secondary">
            Adj Qty
          </Button>

        </div>

        <Checkbox
          label="Archived"
        />

      </div>

    </Card>
  );
}

export default LotTransactions;