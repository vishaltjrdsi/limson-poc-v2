import "./Header.css";
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import menuData from "../../data/menuData";
import logo from "../../assets/icons/atlas_logo.png";

import { FaBell, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiLogOut } from "react-icons/fi";

import {
  MdApps,
  MdAssessment,
  MdAdminPanelSettings,
  MdBuild,
} from "react-icons/md";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [hoverMenu, setHoverMenu] = useState(null);

  const timer = useRef(null);

  const isMenuActive = (menu) => {
  const sections = menuData[menu] || [];

  return sections.some((section) =>
    section.items.some(
      (item) =>
        item.path !== "#" &&
        location.pathname.startsWith(item.path)
    )
  );
};

  const menuIcons = {
    APPS: <MdApps className="nav-icon" />,
    REPORTS: <MdAssessment className="nav-icon" />,
    ADMIN: <MdAdminPanelSettings className="nav-icon" />,
    TOOLS: <MdBuild className="nav-icon" />,
  };

  const menus = ["APPS", "REPORTS", "ADMIN", "TOOLS"];

  const openMenu = (menu) => {
    clearTimeout(timer.current);
    setHoverMenu(menu);
  };

  const closeMenu = () => {
    timer.current = setTimeout(() => {
      setHoverMenu(null);
    }, 150);
  };

  return (
    <header className="header">

      {/* Left */}

      <div className="header-left">

        <img
          src={logo}
          alt="Atlas Logo"
          className="header-logo"
        />

        <h2 className="header-title">
          ATLAS
        </h2>

      </div>

      {/* Menu */}

      <nav className="header-nav">

        {menus.map((menu) => {

          const sections = menuData[menu] || [];

          const totalItems = sections.reduce(
            (count, section) => count + section.items.length,
            0
          );

          let columns = 1;

          if (totalItems > 20) columns = 3;
          else if (totalItems > 10) columns = 2;

          return (

            <div
              key={menu}
              className="nav-wrapper"
              onMouseEnter={() => openMenu(menu)}
              onMouseLeave={closeMenu}
            >

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className={
    hoverMenu === menu || isMenuActive(menu)
        ? "active"
        : ""
}
              >

                {menuIcons[menu]}

                <span>{menu}</span>

              </a>

              {hoverMenu === menu && (

                <div
                  className="dropdown-menu"
                  style={{
                    "--columns": columns,
                  }}
                >

                  <div className="dropdown-grid">

                    {sections.map((section) => (

                      <div
                        key={section.title}
                        className="dropdown-section"
                      >

                        <h5>{section.title}</h5>

                        {section.items.map((item) => (

                          <div
                            key={item.label}
                            className={`dropdown-item ${
                              location.pathname === item.path
                                ? "active"
                                : ""
                            }`}
                            onClick={() => {

                              if (item.path !== "#") {
                                navigate(item.path);
                              }

                              setHoverMenu(null);

                            }}
                          >

                            {item.label}

                          </div>

                        ))}

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

          );

        })}

      </nav>

      {/* Right */}

      <div className="header-right">

        <span className="environment-chip">
          US US
        </span>

        <span className="environment-chip environment-chip-wide">
          SIT ENVIRONMENT
        </span>

        <FaSearch className="icon" />

        <FaBell className="icon" />

        <span className="user-avatar">
          R
        </span>

        <span className="user-name">
          Local Dev User
        </span>

        <FiChevronDown className="user-caret" />

        <FiLogOut className="logout-icon" />

      </div>

    </header>
  );
}

export default Header;