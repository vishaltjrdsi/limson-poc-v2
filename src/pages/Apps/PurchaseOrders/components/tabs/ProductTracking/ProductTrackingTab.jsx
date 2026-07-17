import "./ProductTracking.css";

import { AgGridTable } from "../../../../../../components/common";

import productTrackingColumns from "./productTrackingColumns";
import productTrackingMockData from "./productTrackingMockData";
import ProductTrackingFooter from "./components/ProductTrackingFooter";

function ProductTrackingTab() {
  return (
    <div className="product-tracking-page">
      <div className="product-tracking-grid">
        <AgGridTable
          columnDefs={productTrackingColumns}
          rowData={productTrackingMockData}
          pagination={false}
        />
      </div>

      <ProductTrackingFooter />
    </div>
  );
}

export default ProductTrackingTab;