import { ReportPage } from "../../../components/common";

import reportTabs from "./reportTabs";
import reportData from "./reportData";
import reportColumns from "../../../config/reports/reportColumns";

function SalesReports() {

  return (

    <ReportPage
      label="ANALYTICS"
      title="Sales Reports"
      tabs={reportTabs}
      columns={reportColumns}
      data={reportData}
    />

  );

}

export default SalesReports;