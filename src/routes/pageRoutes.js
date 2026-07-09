import ProgramSettings from "../pages/ProgramSettings/ProgramSettings";
import ScreenSetup from "../pages/ScreenSetup/ScreenSetup";
import VendorRules from "../pages/VendorRules/VendorRules";
import WarehouseRules from "../pages/WarehouseRules/WarehouseRules";
import ListNavigation from "../pages/ListNavigation/ListNavigation";
import MasterDataList from "../pages/MasterDataList/MasterDataList";
import CanopyExports from "../pages/CanopyExports/CanopyExports";

const pageRoutes = {
  HOME: CanopyExports,
  "Canopy Exports": CanopyExports,
  "Program Settings": ProgramSettings,
  "Screen Setup": ScreenSetup,
  "Vendor Rules": VendorRules,
  "Warehouse Rules": WarehouseRules,
  "List Navigation": ListNavigation,
  
  "Master Data List": MasterDataList,
};

export default pageRoutes;
