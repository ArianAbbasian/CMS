import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import "./Sidebar.css";
import { menuItems } from "../../datas";

export default function Sidebar({ isOpen, onClose }) {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`sidebar ${isDarkMode ? "dark" : "light"} ${
          isOpen ? "open" : ""
        }`}
        onClick={(e) => {
          if (e.target.tagName === "A") return;
          onClose();
        }}
      >
        <div className="sidebarWrapper">
          {menuItems.map((menu, index) => (
            <div className="sidebarMenu" key={index}>
              <h3 className="sidebarTitle">{menu.title}</h3>
              <ul className="sidebarList">
                {menu.items.map((item, itemIndex) => (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "link active" : "link"
                    }
                    key={itemIndex}
                    end={item.path === "/"}
                  >
                    <li className="sidebarListItem">
                      <span className="sidebarIcon">{item.icon}</span>
                      {item.text}
                    </li>
                  </NavLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {isOpen && <div className="sidebarOverlay" onClick={onClose} />}
    </>
  );
}
