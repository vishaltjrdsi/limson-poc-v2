import { useState } from "react";

import {
  Page,
  SectionCard,
  Button,
} from "../../components/Common";

import AccountsPayable from "./AccountsPayable/AccountsPayable";
import AccountsReceivable from "./AccountsReceivable/AccountsReceivable";

import "./CanopyExports.css";

function CanopyExports() {

  const [module, setModule] = useState("AP");

  return (
    <Page variant="form">

      <SectionCard
        label="MASTER DATA"
        title="Canopy Exports"
        actions={
          <div className="canopy-module-switch">

            <Button
              variant="tab"
              className={module === "AP" ? "active" : ""}
              onClick={() => setModule("AP")}
            >
              Accounts Payable (AP)
            </Button>

            <Button
              variant="tab"
              className={module === "AR" ? "active" : ""}
              onClick={() => setModule("AR")}
            >
              Accounts Receivable (AR)
            </Button>

          </div>
        }
      >

        {module === "AP"
          ? <AccountsPayable />
          : <AccountsReceivable />
        }

      </SectionCard>

    </Page>
  );
}

export default CanopyExports;