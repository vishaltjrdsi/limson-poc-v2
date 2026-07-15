import { useNavigate } from "react-router-dom";

import {
  Page,
  NavigationCard,
} from "../../../components/common";

import { ROUTES } from "../../../routes/routeConstants";
import listNavData from "../../../config/admin/listNavData";

import "./ListNavigation.css";

function ListNavigation() {

  const navigate = useNavigate();

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
            key={item.id}
            {...item}
            onClick={() =>
              navigate(`${ROUTES.MASTER_DATA_LIST}/${item.id}`)
            }
          />

        ))}

      </div>

    </Page>
  );
}

export default ListNavigation;