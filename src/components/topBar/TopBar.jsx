// src/components/topBar/TopBar.jsx
import React from "react";
import "./Topbar.css";
import { 
  Notifications, 
  Language, 
  Settings, 
  Menu,
  Close
} from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function TopBar({ sidebarOpen, setSidebarOpen }) {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className={`topbar ${isDarkMode ? "dark" : ""}`}>
      <div className="topbarWrapper">
        <div className="topleft">
          <div 
            className="hamburgerMenu"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <Close /> : <Menu />}
          </div>
          <span className="logo">Arian ❤️</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Notifications fontSize="small" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language fontSize="small" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings fontSize="small" />
          </div>
          <div 
            className="topbarIconContainer"
            onClick={toggleTheme}
          >
            {isDarkMode ? 
              <Brightness7 fontSize="small" /> : 
              <Brightness4 fontSize="small" />
            }
          </div>
          <img 
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`} 
            className="topAvatar" 
            alt="Profile" 
          />
        </div>
      </div>
    </div>
  );
}