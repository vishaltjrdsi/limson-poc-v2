import {AgGridTable} from "../../../../../../components/common";
import purchaseColumns from "./purchaseColumns";
import purchaseMockData from "./purchaseMockData";

function PurchaseOrderGrid() {
  return (
    <AgGridTable
      rowData={purchaseMockData}
      columnDefs={purchaseColumns}
      pagination={false}
      height={380}
    />
  );
}

export default PurchaseOrderGrid;