import { Card } from "../../../components/common";

import "./TwoPanelLayout.css";

function TwoPanelLayout({
  leftTitle,
  rightTitle,
  left,
  right,
}) {
  return (
    <div className="two-panel-layout">

      <Card padding="none" className="panel-card">

        <div className="panel-header">
          {leftTitle}
        </div>

        <div className="panel-body">
          {left}
        </div>

      </Card>

      <Card padding="none" className="panel-card">

        <div className="panel-header">
          {rightTitle}
        </div>

        <div className="panel-body">
          {right}
        </div>

      </Card>

    </div>
  );
}

export default TwoPanelLayout;