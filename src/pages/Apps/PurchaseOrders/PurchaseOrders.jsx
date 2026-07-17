import { useState } from "react";

import { Page } from "../../../components/common";

import PurchaseHeader from "./components/PurchaseHeader";
import PurchaseContent from "./components/PurchaseContent";

import "./PurchaseOrders.css";

function PurchaseOrders() {

  const [activeTab, setActiveTab] =
    useState("Purchase");

  return (

    <Page variant="form">

      <PurchaseHeader />

      <PurchaseContent
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

    </Page>

  );

}

export default PurchaseOrders;