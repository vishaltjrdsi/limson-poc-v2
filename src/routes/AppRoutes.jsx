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
  Reports,
  SalesReports,
  PurchasingReports,
  InventoryReports,
  ItemsContactsReports,
  BusinessPartners,
  ItemMaintenance,
  PendingOrders,
  TransferOrder,
  RepackOrder,
  InventoryControl,
  SalesOrder,
  PurchaseOrders,
} from "../pages";

import { ROUTES } from "./routeConstants";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        {/* Home */}
        <Route path={ROUTES.HOME} element={<Home />} />

        {/* Admin */}
        <Route path={ROUTES.PROGRAM_SETTINGS} element={<ProgramSettings />} />

        <Route path={ROUTES.SCREEN_SETUP} element={<ScreenSetup />} />

        <Route path={ROUTES.VENDOR_RULES} element={<VendorRules />} />

        <Route path={ROUTES.WAREHOUSE_RULES} element={<WarehouseRules />} />

        <Route path={ROUTES.LIST_NAVIGATION} element={<ListNavigation />} />

        <Route
          path={`${ROUTES.MASTER_DATA_LIST}/:id`}
          element={<MasterDataList />}
        />

        {/* Adjustments */}
        <Route
          path={ROUTES.INVENTORY_ADJUSTMENT}
          element={<InventoryAdjustment />}
        />

        <Route path={ROUTES.TX_QTY_ADJUSTMENT} element={<TxQtyAdjustment />} />

        {/* Users */}
        <Route path={ROUTES.USER_SETTINGS} element={<UserSettings />} />

        <Route path={ROUTES.ROLES} element={<RolesManagement />} />

        <Route path={ROUTES.BACKUP_ACCESS} element={<BackupAccess />} />

        {/* Tools */}
        <Route path={ROUTES.SPOT_RATE} element={<SpotRate />} />

        <Route path={ROUTES.FISCAL_CALENDAR} element={<FiscalCalendar />} />

        <Route path={ROUTES.EDI_SETTINGS} element={<EdiSettings />} />

        <Route path={ROUTES.UNIT_OF_MEASURE} element={<UnitOfMeasure />} />

        <Route path={ROUTES.PRICING_MISMATCH} element={<PricingMismatch />} />

        {/* Master Data */}
        <Route path={ROUTES.CANOPY_EXPORTS} element={<CanopyExports />} />

        {/* Reports */}
        <Route path={ROUTES.REPORTS} element={<Reports />} />

        <Route path={ROUTES.SALES_REPORTS} element={<SalesReports />} />

        <Route
          path={ROUTES.PURCHASING_REPORTS}
          element={<PurchasingReports />}
        />

        <Route path={ROUTES.INVENTORY_REPORTS} element={<InventoryReports />} />

        <Route
          path={ROUTES.ITEMS_CONTACTS_REPORTS}
          element={<ItemsContactsReports />}
        />

        {/* Apps */}

        <Route path={ROUTES.BUSINESS_PARTNERS} element={<BusinessPartners />} />

        <Route path={ROUTES.ITEM_MAINTENANCE} element={<ItemMaintenance />} />

        <Route path={ROUTES.PENDING_ORDERS} element={<PendingOrders />} />

        <Route path={ROUTES.TRANSFER_ORDER} element={<TransferOrder />} />

        <Route path={ROUTES.REPACK_ORDER} element={<RepackOrder />} />

        <Route path={ROUTES.INVENTORY_CONTROL} element={<InventoryControl />} />

        <Route path={ROUTES.SALES_ORDER} element={<SalesOrder />} />

        <Route path={ROUTES.PURCHASE_ORDERS} element={<PurchaseOrders />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
