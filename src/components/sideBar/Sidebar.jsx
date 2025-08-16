import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  MessageOutlined,

} from "@mui/icons-material";
import "./Sidebar.css";

export default function Sidebar() {
  const { isDarkMode } = useTheme();

  const menuItems = [
    {
      title: "Dashboard",
      items: [
        { icon: <LineStyle />, text: "Home", path: "/" },
        { icon: <Timeline />, text: "Analytics", path: "/analytics" },
        { icon: <TrendingUp />, text: "Sales", path: "/sales" }
      ]
    },
    {
      title: "Quick Menu",
      items: [
        { icon: <PermIdentity />, text: "Users", path: "/users" },
        { icon: <PermIdentity />, text: "New User", path: "/newUser" },
        { icon: <Storefront />, text: "Products", path: "/products" },
        { icon: <AttachMoney />, text: "Transactions", path: "/transactions" },
        { icon: <BarChart />, text: "Reports", path: "/reports" }
      ]
    },
    {
      title: "Notifications",
      items: [
        { icon: <MailOutline />, text: "Mail", path: "/mail" },
        { icon: <DynamicFeed />, text: "Feedback", path: "/feedback" },
        { icon: <MessageOutlined />, text: "Messages", path: "/messages" }
      ]
    }
  ];

  return (
    <div className={`sidebar ${isDarkMode ? "dark" : "light"}`}>
      <div className="sidebarWrapper">
        {menuItems.map((menu, index) => (
          <div className="sidebarMenu" key={index}>
            <h3 className="sidebarTitle">{menu.title}</h3>
            <ul className="sidebarList">
              {menu.items.map((item, itemIndex) => (
                <NavLink
                  to={item.path}
                  className="link"
                  key={itemIndex}
                  end={item.path === "/"}
                >
                  {({ isActive }) => (
                    <li
                      className={`sidebarListItem ${
                        isActive ? "active" : ""
                      }`}
                    >
                      <span className="sidebarIcon">{item.icon}</span>
                      {item.text}
                    </li>
                  )}
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}