import { Button } from "../../../../../../../components/common";

const purchaseOrders = [
  "211058",
  "211057",
  "211056",
  "211055",
  "211054",
  "211053",
];

function MultiSelectSection() {
  return (
    <div className="multi-select-wrapper">

      <div className="multi-column">

        <label>Email PO MULTI-SELECT</label>

        <select multiple size={14}>
          {purchaseOrders.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <Button>📋</Button>

      </div>

      <div className="multi-column">

        <label>EDI PO MULTI-SELECT</label>

        <select multiple size={14}>
          {purchaseOrders.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <Button>📋</Button>

      </div>

    </div>
  );
}

export default MultiSelectSection;