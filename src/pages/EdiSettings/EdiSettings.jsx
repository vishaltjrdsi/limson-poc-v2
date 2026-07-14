import { useState } from "react";

import {
  Page,
  SectionCard,
  Button,
  GridPage,
} from "../../components/common";

import columns from "./columns";
import mockData from "./mockData";

function EdiSettings() {

  const [rowData] = useState(mockData);

  return (
    <Page variant="form">

      <SectionCard
        label="SYSTEM TOOLS"
        title="EDI Settings for Inbound Orders"
      >

        <GridPage
          actions={
            <>
              <Button variant="secondary">
                Add DEXX
              </Button>

              <Button>
                Save
              </Button>
            </>
          }
          columnDefs={columns}
          rowData={rowData}
        />

      </SectionCard>

    </Page>
  );
}

export default EdiSettings;