import { Page } from "../../../components/common";

import ReportPage from "../components/ReportPage/ReportPage";
import salesConfig from "../configs/salesConfig";

function SalesReports() {
  return (
    <Page>
      <ReportPage config={salesConfig} />
    </Page>
  );
}

export default SalesReports;