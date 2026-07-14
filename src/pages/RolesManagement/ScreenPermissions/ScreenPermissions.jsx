import {
    Card,
    Input,
    Select,
    Button,
    AgGridTable,
} from "../../../components/common";

import columns from "./screenPermissionsColumns";
import mockData from "./screenPermissionsMockData";

import "./ScreenPermissions.css";

function ScreenPermissions() {

    return (

        <div className="screen-permission-layout">

            {/* LEFT */}

          <Card
    padding="none"
    className="screen-card"
>

    <div className="card-header">
        SCREEN SETUP
    </div>

    <div className="card-body">

        <div className="screen-form">

            <Select
                label="SELECT SCREEN"
                placeholder="Select Screen"
                options={[]}
            />

            <Select
                label="MODULE"
                placeholder="Module"
                options={[]}
            />

            <Select
                label="SCREEN"
                placeholder="Screen"
                options={[]}
            />

        </div>

        <div className="card-footer">

            <Button variant="secondary">
                Clear Selection
            </Button>

            <Button>
                Save Setup
            </Button>

        </div>

    </div>

</Card>
            {/* RIGHT */}

            <Card
                padding="none"
                className="details-card"
            >

                <div className="card-header">

                    CONFIGURATION DETAILS

                </div>

              <AgGridTable
    rowData={mockData}
    columnDefs={columns}
    pagination={false}
    autoHeight={false}
    height={200}
/>

            </Card>

        </div>

    );

}

export default ScreenPermissions;