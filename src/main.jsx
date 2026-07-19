import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import App from "./App";
import AuthProvider from "./auth/context/AuthProvider";

import "./styles/global.css";
import "./styles/theme.css";
import "./styles/typography.css";
import "./styles/variables.css";
import "@okta/okta-signin-widget/css/okta-sign-in.min.css";
import "./auth/components/OktaWidget/OktaWidget";


ModuleRegistry.registerModules([
  AllCommunityModule,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);