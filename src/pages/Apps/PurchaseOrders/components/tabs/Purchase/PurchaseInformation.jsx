import { Card, DynamicForm } from "../../../../../../components/common";

const purchaseFields = [
  {
    label: "Vendor",
    name: "vendor",
    type: "select",
    options: ["MILLER MELUNG COMPANY LLC"],
    value: "MILLER MELUNG COMPANY LLC",
  },
  {
    label: "Ship To",
    name: "shipTo",
    type: "select",
    options: ["SFI HOUSTON"],
    value: "SFI HOUSTON",
  },
  {
    label: "Ship Via",
    name: "shipVia",
    type: "select",
    options: ["Overland"],
    value: "Overland",
  },
  {
    label: "Departure Point",
    name: "departurePoint",
    type: "select",
    options: [""],
  },
  {
    label: "Destination Port",
    name: "destinationPort",
    type: "select",
    options: ["N/A"],
    value: "N/A",
  },
  {
    label: "Incoterms",
    name: "incoterms",
    type: "select",
    options: ["FCA"],
    value: "FCA",
  },
  {
    label: "Terms",
    name: "terms",
    type: "select",
    options: ["30 DAYS"],
    value: "30 DAYS",
  },
  {
    label: "Ship Date",
    name: "shipDate",
    type: "date",
    value: "2026-04-16",
  },
  {
    label: "Customer PO#",
    name: "customerPo",
    value: "4574107841-1",
  },
];

function PurchaseInformation() {
  return (
    <Card className="purchase-information-card">
      <DynamicForm
        fields={purchaseFields}
        columns={2}
      />
    </Card>
  );
}

export default PurchaseInformation;