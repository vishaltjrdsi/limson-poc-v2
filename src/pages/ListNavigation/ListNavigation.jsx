import Page from "../../components/common/Page/Page";
import NavigationCard from "../../components/common/NavigationCard/NavigationCard";
import listNavData from "../../config/admin/listNavData";

import "./ListNavigation.css";

function ListNavigation({
  setSelectedPage,
}) {
  return (
    <Page>

      <div className="list-navigation-header">

        <h1>MASTER DATA</h1>

        <h3>List Navigation</h3>

        <p>
          Select a list below to manage its records.
        </p>

      </div>

      <div className="navigation-grid">

        {listNavData.map((item) => (
          <NavigationCard
            key={item.title}
            {...item}
            onClick={() => {
  if (item.id === "palletRates") {
    setSelectedPage("Master Data List");
  }
}}
          />
        ))}

      </div>

    </Page>
  );
}

export default ListNavigation;