import trackingInfoFields from "../trackingInfoFields";
import trackingInfoData from "../trackingInfoData";

import TrackingField from "./TrackingField";

function TrackingGrid() {
  return (
    <div className="tracking-grid">
      {trackingInfoFields.flat().map((field) => (
        <TrackingField
          key={field.name}
          field={field}
          value={trackingInfoData[field.name]}
        />
      ))}
    </div>
  );
}

export default TrackingGrid;