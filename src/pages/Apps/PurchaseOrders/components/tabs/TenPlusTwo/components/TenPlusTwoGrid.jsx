import tenPlusTwoFields from "../tenPlusTwoFields";
import tenPlusTwoData from "../tenPlusTwoData";

import TenPlusTwoField from "./TenPlusTwoField";

function TenPlusTwoGrid() {
  return (
    <div className="tenplus2-grid">
      {tenPlusTwoFields.map((field) => (
        <TenPlusTwoField
          key={field.name}
          field={field}
          value={tenPlusTwoData[field.name]}
        />
      ))}
    </div>
  );
}

export default TenPlusTwoGrid;