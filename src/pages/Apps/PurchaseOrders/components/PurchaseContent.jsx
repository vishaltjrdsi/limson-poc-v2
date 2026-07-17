import {Tabs} from "../../../../components/common";
import PurchaseTab from "./tabs/Purchase/PurchaseTab";
import TrackingInfoTab from "./tabs/TrackingInfo/TrackingInfoTab";
import TenPlusTwoTab from "./tabs/TenPlusTwo/TenPlusTwoTab";
import ProductTrackingTab from "./tabs/ProductTracking/ProductTrackingTab";
import DocumentationTab from "./tabs/Documentation/DocumentationTab";
import InboundCostTab from "./tabs/InboundCost/InboundCostTab";

function PurchaseContent({
  activeTab,
  setActiveTab,
}) {

  return (

    <>

      <Tabs
        tabs={[
          "Purchase",
          "Tracking Info",
          "10 Plus 2",
          "Product Tracking",
          "Documentation",
          "Inbound Cost",
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "Purchase" && (
        <PurchaseTab />
      )}

      {activeTab === "Tracking Info" && (
        <TrackingInfoTab />
      )}

      {activeTab === "10 Plus 2" && (
        <TenPlusTwoTab />
      )}

      {activeTab === "Product Tracking" && (
        <ProductTrackingTab />
      )}

      {activeTab === "Documentation" && (
        <DocumentationTab />
      )}

      {activeTab === "Inbound Cost" && (
        <InboundCostTab />
      )}

    </>

  );

}

export default PurchaseContent;