// src/App.jsx
import React, { useState, useEffect } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topBar/TopBar.jsx";
import Sidebar from "./components/sideBar/Sidebar.jsx";
import Loading from "./components/Loading/Loading.jsx";
import "./App.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  let router = useRoutes(routes);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="appContainer">
          <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="mainContent">
            <Sidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
            <div className="contentArea">{router}</div>
          </div>
        </div>
      )}
    </>
  );
}
