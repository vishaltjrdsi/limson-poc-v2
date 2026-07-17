import "./TrackingInfo.css";

import TrackingGrid from "./components/TrackingGrid";
import TrackingNotes from "./components/TrackingNotes";

function TrackingInfoTab() {
  return (
    <>
      <TrackingGrid />

      <TrackingNotes />
    </>
  );
}

export default TrackingInfoTab;