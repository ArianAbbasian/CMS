import React from "react";
import "./Topbar.css";
import { Notifications, Language, Settings } from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function TopBar() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
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
            style={{ cursor: "pointer" }}
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