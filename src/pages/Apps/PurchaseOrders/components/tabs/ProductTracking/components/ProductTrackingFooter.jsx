import { Button, Select, Input } from "../../../../../../../components/common";

function ProductTrackingFooter() {
  return (
    <div className="product-tracking-footer">
      <div className="product-tracking-actions">
        <Button size="small">Allocations</Button>
        <Button size="small">IM</Button>
        <Button size="small">GRWGT</Button>
        <Button size="small">PALLET</Button>
      </div>

      <div className="product-tracking-controls">
        <Select
          size="small"
          options={[
            {
              label: "PO Condition",
              value: "condition",
            },
          ]}
        />

        <Input
          label=""
          value=""
        />
      </div>
    </div>
  );
}

export default ProductTrackingFooter;