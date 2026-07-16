import {
  Card,
  Input,
  AgGridTable,
} from "../../../../components/common";

const columns = [
  {
    headerName: "LOT NUMBER",
    field: "lot",
    flex: 1.2,
  },
  {
    headerName: "INVENTORY QTY",
    field: "qty",
    flex: 1,
  },
  {
    headerName: "LOT VALUE",
    field: "value",
    flex: 1,
  },
  {
    headerName: "WGT REMAINING",
    field: "weight",
    flex: 1,
  },
];

const rowData = [
  {
    lot: "010654BET",
    qty: "100",
    value: "6,241.51",
    weight: "1,000.00",
  },
];

function InventorySummary() {

  return (

    <div className="inventory-middle">

      {/* LEFT */}

      <div>

        <Card>

          <h3 className="inventory-card-title">
            Production
          </h3>

          <div className="inventory-production">

            <div>

              <div>Available</div>

              <div>Allocated</div>

              <div>188349</div>

            </div>

            <div className="inventory-condition">

              <div>GOOD</div>

              <div>ASC-QC</div>

              <div>REWORK-2</div>

            </div>

          </div>

        </Card>

        <Card className="inventory-storage-card">

          <h3 className="inventory-card-title">
            Storage Name
          </h3>

          <strong>
            FAIRWEATHER MANAGEMENT CORP
          </strong>

        </Card>

        <Card className="inventory-production-date">

          <h3 className="inventory-card-title">
            Production Date
          </h3>

          <Input
            label="BEST BY DATE"
            value="8/27/2027"
          />

        </Card>

      </div>

      {/* RIGHT */}

      <Card>

        <AgGridTable
          columnDefs={columns}
          rowData={rowData}
          pagination={false}
          height={300}
        />

      </Card>

    </div>

  );

}

export default InventorySummary;