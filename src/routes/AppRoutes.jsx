import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";

import {
  Home,
  CanopyExports,

  ProgramSettings,
  ScreenSetup,
  VendorRules,
  WarehouseRules,
  ListNavigation,
  MasterDataList,

  InventoryAdjustment,
  TxQtyAdjustment,

  UserSettings,
  RolesManagement,
  BackupAccess,

  SpotRate,
  FiscalCalendar,
  EdiSettings,
  UnitOfMeasure,
  PricingMismatch,
} from "../pages";

import { ROUTES } from "./routeConstants";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        {/* Home */}
        <Route
          path={ROUTES.HOME}
          element={<Home />}
        />

        {/* Admin */}
        <Route
          path={ROUTES.PROGRAM_SETTINGS}
          element={<ProgramSettings />}
        />

        <Route
          path={ROUTES.SCREEN_SETUP}
          element={<ScreenSetup />}
        />

        <Route
          path={ROUTES.VENDOR_RULES}
          element={<VendorRules />}
        />

        <Route
          path={ROUTES.WAREHOUSE_RULES}
          element={<WarehouseRules />}
        />

        <Route
          path={ROUTES.LIST_NAVIGATION}
          element={<ListNavigation />}
        />

       <Route
    path={`${ROUTES.MASTER_DATA_LIST}/:id`}
    element={<MasterDataList />}
/>



        {/* Adjustments */}
        <Route
          path={ROUTES.INVENTORY_ADJUSTMENT}
          element={<InventoryAdjustment />}
        />

        <Route
          path={ROUTES.TX_QTY_ADJUSTMENT}
          element={<TxQtyAdjustment />}
        />

        {/* Users */}
        <Route
          path={ROUTES.USER_SETTINGS}
          element={<UserSettings />}
        />

        <Route
          path={ROUTES.ROLES}
          element={<RolesManagement />}
        />

        <Route
          path={ROUTES.BACKUP_ACCESS}
          element={<BackupAccess />}
        />

        {/* Tools */}
        <Route
          path={ROUTES.SPOT_RATE}
          element={<SpotRate />}
        />

        <Route
          path={ROUTES.FISCAL_CALENDAR}
          element={<FiscalCalendar />}
        />

        <Route
          path={ROUTES.EDI_SETTINGS}
          element={<EdiSettings />}
        />

        <Route
          path={ROUTES.UNIT_OF_MEASURE}
          element={<UnitOfMeasure />}
        />

        <Route
          path={ROUTES.PRICING_MISMATCH}
          element={<PricingMismatch />}
        />

        {/* Master Data */}
        <Route
          path={ROUTES.CANOPY_EXPORTS}
          element={<CanopyExports />}
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;