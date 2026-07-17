import "./Documentation.css";

import {
  AgGridTable,
  Button,
  Select,
} from "../../../../../../components/common";

import documentColumns from "./documentColumns";
import documentMockData from "./documentMockData";

function DocumentationTab() {
  return (
    <div className="documentation-page">
      {/* Top Section */}

      <div className="documentation-top">
        {/* Purchase Orders */}

        <div className="doc-column">
          <h3>PURCHASE ORDERS</h3>

          <div className="doc-row">
            <Button variant="secondary" className="doc-btn">
              Open Purchase
            </Button>
            <Button variant="secondary" className="doc-btn">
              EDI Batch
            </Button>
          </div>

          <div className="doc-row">
            <Button variant="secondary" className="doc-btn">
              Email Purchase
            </Button>
            <Button variant="secondary" className="doc-btn">
              Email Batch
            </Button>
          </div>
          <span>Sent On</span>

          <div className="doc-notes">
            <div className="doc-notes-header">
              PURCHASE NOTES (Printed on Purchase Order)
            </div>

            <textarea defaultValue="None" />
          </div>
        </div>

        {/* Ship Notification */}

        <div className="doc-column ship-column">
          <h3>SHIP NOTIFICATION</h3>

          <div className="doc-row">
            <Button variant="secondary" className="doc-btn">
              Open Notification
            </Button>
          </div>

          <div className="doc-row">
            <Button variant="secondary" className="doc-btn">
              Email Notification
            </Button>

            <Button variant="secondary" className="doc-btn">
              Email Batch
            </Button>
          </div>

          <span>Sent On</span>
          <div className="doc-notes">
            <div className="doc-notes-header">
              PURCHASE NOTES
              <br />
              (Printed on Ship Notification)
            </div>

            <textarea />
          </div>
        </div>

        {/* Multi Select */}

        <div className="multi-select-area">
          <div className="multi-list">
            <label>
              Email PO
              <br />
              MULTI SELECT
            </label>

            <select multiple>
              <option>211054</option>
              <option>211053</option>
              <option>211052</option>
              <option>211051</option>
              <option>211050</option>
              <option>211049</option>
              <option>211048</option>
              <option>211047</option>
              <option>211046</option>
              <option>211045</option>
              <option>211044</option>
              <option>211043</option>
              <option>211042</option>
              <option>211041</option>
              <option>211040</option>
              <option>211039</option>
              <option>211038</option>
              <option>211037</option>
              <option>211036</option>
              <option>211035</option>
              <option>211034</option>
              <option>211033</option>
              <option>211032</option>
              <option>211031</option>
              <option>211030</option>
              <option>211029</option>
              <option>211028</option>
              <option>211027</option>
              <option>211026</option>
              <option>211025</option>
              <option>211024</option>
              <option>211023</option>
              <option>211022</option>
              <option>211021</option>
              <option>211020</option>
              <option>211019</option>
              <option>211018</option>
              <option>211017</option>
              <option>211016</option>
              <option>211015</option>
              <option>211014</option>
              <option>211013</option>
              <option>211012</option>
              <option>211011</option>
              <option>211010</option>
              <option>211009</option>
              <option>211008</option>
              <option>211007</option>
              <option>211006</option>
              <option>211005</option>
            </select>

            <Button variant="secondary" className="doc-btn">
              📋
            </Button>
          </div>

          <div className="multi-list">
            <label>EDI PO Multi Select</label>

            <select multiple>
              <option>211058</option>
              <option>211057</option>
              <option>211056</option>
              <option>211055</option>
            </select>

            <Button variant="secondary" className="doc-btn">
              📋
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="documents-section">
        <div className="documents-header">
          <h3>LIST OF DOCUMENTS</h3>

          <Button variant="secondary" className="doc-btn">
            Upload Document
          </Button>
        </div>

        <div className="documents-filter">
          <span>Filter By</span>

          <Select
            options={[
              {
                label: "All",
                value: "all",
              },
            ]}
          />

          <Select
            options={[
              {
                label: "All",
                value: "all",
              },
            ]}
          />
        </div>

        <AgGridTable
          className="documents-grid"
          columnDefs={documentColumns}
          rowData={documentMockData}
          pagination={false}
          height={150}
        />
      </div>
    </div>
  );
}

export default DocumentationTab;
