import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import App from "./App";

import "./styles/global.css";
import "./styles/theme.css";

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>

        <App/>

    </BrowserRouter>

);
