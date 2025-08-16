// src/App.jsx
import React, { useState } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topBar/TopBar.jsx";
import Sidebar from "./components/sideBar/Sidebar.jsx";
import "./App.css";

export default function App() {
  let router = useRoutes(routes);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="appContainer">
      <Topbar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      <div className="mainContent">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        <div className="contentArea">
          {router}
        </div>
      </div>
    </div>
  );
}