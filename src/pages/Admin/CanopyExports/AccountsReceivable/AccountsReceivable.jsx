import { useState } from "react";

import { Tabs } from "../../../../components/common";

import InvoiceSelection from "./InvoiceSelection";
import ExportToFile from "./ExportToFile";
import EInvoice from "./EInvoice";
import AccountCodes from "./AccountCodes";

function AccountsReceivable() {

  const [tab, setTab] =
    useState("Invoice Selection");

  return (
    <>

      <Tabs
        tabs={[
          "Invoice Selection",
          "Export To File",
          "E-Invoice",
          "Account Codes",
        ]}
        activeTab={tab}
        onChange={setTab}
      />

      {tab === "Invoice Selection" &&
        <InvoiceSelection />
      }

      {tab === "Export To File" &&
        <ExportToFile />
      }

      {tab === "E-Invoice" &&
        <EInvoice />
      }

      {tab === "Account Codes" &&
        <AccountCodes />
      }

    </>
  );
}

export default AccountsReceivable;