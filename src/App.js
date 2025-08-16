import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Topbar from "./components/topBar/TopBar.jsx";
import Sidebar from "./components/sideBar/Sidebar.jsx";


import "./App.css";

export default function App() {
  let router = useRoutes(routes);

  return (
    <>
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        {router}
      </div>
    </>
  );
}
