import columns from "../ItemsContacts/itemsContactsColumns";
import data from "../ItemsContacts/itemsContactsMockData";

const itemsContactsConfig = {
  title: "Items & Contacts Reports",

  tabs: [
    {
      id: "itemMaintenance",
      label: "Item Maintenance",
      columns,
      data,
    },
  ],
};

export default itemsContactsConfig;