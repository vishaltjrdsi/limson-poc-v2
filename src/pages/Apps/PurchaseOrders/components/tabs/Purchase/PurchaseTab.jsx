import PurchaseInformation from "../Purchase/PurchaseInformation";
import PurchaseOrderLines from "../Purchase/PurchaseOrderLines";
import PurchaseBottomBar from "../../PurchaseBottomBar";

function PurchaseTab() {
  return (
    <>
      <PurchaseInformation />

      <PurchaseOrderLines />

      <PurchaseBottomBar />
    </>
  );
}

export default PurchaseTab;