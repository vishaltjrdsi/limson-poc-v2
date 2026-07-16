import {
  Page,
  SectionCard,
  Input,
  Button,
} from "../../../components/common";

import OrderInformation from "./components/OrderInformation";
import TransferDetails from "./components/TransferDetails";

import "./TransferOrder.css";

function TransferOrder() {

    return (

        <Page variant="form">

       <SectionCard
  label="TRANSFER ORDER"
  title="Order Details"
>

  <OrderInformation />

  <TransferDetails />

</SectionCard>
        </Page>

    );

}

export default TransferOrder;