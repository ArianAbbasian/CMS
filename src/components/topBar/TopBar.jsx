import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Notifications, Language, Menu, Close } from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import NotificationModal from "../NotificationModal/NotificationModal";
import { notificationsData } from "../../datas";

export default function TopBar({ sidebarOpen, setSidebarOpen }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsData);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem("hasSeenThemeTooltip");
    if (!hasSeenTooltip) {
      const timer = setTimeout(() => {
        setShowThemeTooltip(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
    if (!isNotificationOpen) {
      setNotifications(
        notifications.map((notif) => ({
          ...notif,
          unread: false,
        }))
      );
    }
  };

  const handleThemeToggle = () => {
    toggleTheme();

    if (showThemeTooltip) {
      setShowThemeTooltip(false);
    }
  };

  const unreadCount = notifications.filter((notif) => notif.unread).length;

  return (
    <>
      <div className={`topbar ${isDarkMode ? "dark" : ""}`}>
        <div className="topbarWrapper">
          <div className="topleft">
            <div
              className="hamburgerMenu"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <Close /> : <Menu />}
            </div>
            <span className="logo">Arian Abbasian ❤️</span>
          </div>
          <div className="topRight">
            <div
              className="topbarIconContainer"
              onClick={handleNotificationClick}
            >
              <Notifications fontSize="small" />
              {unreadCount > 0 && (
                <span className="topIconBadge">{notifications.length}</span>
              )}
            </div>
            <div className="topbarIconContainer">
              <Language fontSize="small" />
            </div>
            <div
              className="topbarIconContainer theme-toggle-container"
              onClick={handleThemeToggle}
            >
              {isDarkMode ? (
                <Brightness7 fontSize="small" />
              ) : (
                <Brightness4 fontSize="small" />
              )}

              {showThemeTooltip && (
                <div className="theme-tooltip">
                  <div className="tooltip-arrow"></div>
                  Toggle dark mode
                </div>
              )}
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              className="topAvatar"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <NotificationModal
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
      />
    </>
  );
}
