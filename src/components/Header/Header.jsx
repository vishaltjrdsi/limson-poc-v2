import "./Header.css";
import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../auth/hooks/useAuth";
import menuData from "../../data/menuData";
import logo from "../../assets/icons/atlas-logo.png";

import { FaBell, FaSearch } from "react-icons/fa";
import { FiChevronDown, FiLogOut } from "react-icons/fi";

import {
  MdApps,
  MdAssessment,
  MdAdminPanelSettings,
  MdBuild,
} from "react-icons/md";

function Header() {
  const [hoverMenu, setHoverMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const timer = useRef(null);
  const { user, logout } = useAuth();

  const isMenuActive = (menu) => {
    const sections = menuData[menu] || [];

    return sections.some((section) =>
      section.items.some(
        (item) => item.path !== "#" && location.pathname.startsWith(item.path),
      ),
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
        <img src={logo} alt="Atlas Logo" className="header-logo" />

        <h2 className="header-title">ATLAS</h2>
      </div>

      {/* Menu */}
      <>
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
                  onClick={(e) => e.preventDefault()}
                  className={
                    hoverMenu === menu || isMenuActive(menu) ? "active" : ""
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
                        <div key={section.title} className="dropdown-section">
                          <h5>{section.title}</h5>

                          {section.items.map((item) => (
                            <div
                              key={item.label}
                              className={`dropdown-item ${
                                location.pathname === item.path ? "active" : ""
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

        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
          <div className="mobile-top">
            <span>MENU</span>

            <button onClick={() => setMobileOpen(false)}>✕</button>
          </div>

          {menus.map((menu) => (
            <div key={menu} className="mobile-group">
              <div
                className="mobile-title"
                onClick={() =>
                  setExpandedMenu(expandedMenu === menu ? null : menu)
                }
              >
                {menuIcons[menu]}

                <span>{menu}</span>
              </div>

              {expandedMenu === menu && (
                <div className="mobile-sections">
                  {menuData[menu].map((section) => (
                    <div key={section.title}>
                      <div className="mobile-section-title">
                        {section.title}
                      </div>

                      {section.items.map((item) => (
                        <div
                          key={item.label}
                          className="mobile-item"
                          onClick={() => {
                            navigate(item.path);

                            setMobileOpen(false);
                          }}
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </>

      <button className="mobile-toggle" onClick={() => setMobileMenuOpen(true)}>
        ☰
      </button>

      {/* Right */}

      <div className="header-right">
        <span className="environment-chip">US US</span>

        <span className="environment-chip environment-chip-wide">
          SIT ENVIRONMENT
        </span>

        <FaSearch className="icon" />

        <FaBell className="icon" />

        <span className="user-avatar">
          {user?.name?.charAt(0)?.toUpperCase() || "U"}
        </span>

        <span className="user-name">
          {user?.name || user?.preferred_username || "User"}
        </span>

        <FiChevronDown className="user-caret" />

        <FiLogOut
          className="logout-icon"
          onClick={logout}
          title="Logout"
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* Mobile Responive */}

      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-header">
              <h3>Menu</h3>

              <button onClick={() => setMobileMenuOpen(false)}>✕</button>
            </div>

            {menus.map((menu) => (
              <div key={menu} className="mobile-section">
                <div
                  className="mobile-section-title"
                  onClick={() =>
                    setMobileSection(mobileSection === menu ? null : menu)
                  }
                >
                  <span>{menuIcons[menu]}</span>

                  <span>{menu}</span>
                </div>

                {mobileSection === menu && (
                  <div className="mobile-items">
                    {menuData[menu].map((section) => (
                      <div key={section.title}>
                        <div className="mobile-subtitle">{section.title}</div>

                        {section.items.map((item) => (
                          <div
                            key={item.label}
                            className="mobile-item"
                            onClick={() => {
                              if (item.path !== "#") {
                                navigate(item.path);
                              }

                              setMobileMenuOpen(false);
                            }}
                          >
                            {item.label}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
