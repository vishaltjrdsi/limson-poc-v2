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
} from "../pages";

const pageRoutes = {
  HOME: Home,

  "Program Settings": ProgramSettings,
  "Screen Setup": ScreenSetup,
  "Vendor Rules": VendorRules,
  "Warehouse Rules": WarehouseRules,
  "Canopy Exports": CanopyExports,
  "Inventory Adjustments": InventoryAdjustment,
  "TX Qty Adjustment": TxQtyAdjustment,
  "User Settings": UserSettings,
  "Roles": RolesManagement,
  "Backup Access": BackupAccess,
  "Spot Rate": SpotRate,
  "Fiscal Calendar": FiscalCalendar,
  "List Navigation": ListNavigation,
  "Master Data List": MasterDataList,
};

export default pageRoutes;
