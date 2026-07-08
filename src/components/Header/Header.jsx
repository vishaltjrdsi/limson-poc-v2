import "./Header.css";
import { useState, useRef } from "react";
import menuData from "../../data/menuData";
import logo from "../../assets/icons/atlas_logo.png";

import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

import {
  MdApps,
  MdAssessment,
  MdAdminPanelSettings,
  MdBuild,
} from "react-icons/md";

function Header({ selectedPage, setSelectedPage }) {
  const [hoverMenu, setHoverMenu] = useState(null);
  const timer = useRef(null);

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
    }, 200);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Atlas Logo" className="header-logo" />

        <h2 className="header-title">ATLAS</h2>
      </div>

      <nav className="header-nav">
        {menus.map((menu) => {
          const sections = menuData[menu] || [];

          const totalItems = sections.reduce(
            (count, section) => count + section.items.length,
            0,
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
                className={hoverMenu === menu ? "active" : ""}
                onClick={(e) => e.preventDefault()}
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
                      <div key={section.title} className="dropdown-section">
                        <h5>{section.title}</h5>

                        {section.items.map((item) => (
                          <div
                            key={item}
                            className="dropdown-item"
                            onClick={() => {
                              setSelectedPage(item);
                              setHoverMenu(null);
                            }}
                          >
                            {item}
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

      <div className="header-right">
        <FaSearch className="icon" />
        <FaBell className="icon" />
        <FaUserCircle className="icon" />
      </div>
    </header>
  );
}

export default Header;
