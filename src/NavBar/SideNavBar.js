import "./../style.css";
import React from "react";
import { SideNavBarData } from "./SideNavBarData";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardIndex from "../pages/DashboardIndex";
import CurrencyConvert from "../pages/API/CurrencyConver";
import Dictionary from "../pages/API/Dictionary";
import Weather from "../pages/API/Weather";
import Caluculator from "../pages/Tools/calculator";
import CheckList from "../pages/Tools/Checklist";

function SideNavBar() {
  return (
    <BrowserRouter>
      <div className="sideNavBar">
        <ul className="sideNavBarList">
          {SideNavBarData.map((key, val) => {
            return (
              <li
                val={val}
                className="row"
                id={window.location.pathname == key.Link ? "active" : ""}
                onClick={() => {
                  window.location.pathname = key.Link;
                }}
              >
                {""}
                <div id="Logo">{key.Logo}</div>
                {""}
                <div id="title">{key.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <Routes>
        <Route index element={<DashboardIndex />} />
        <Route path="currencyConverter" element={<CurrencyConvert />} />
        <Route path="Dictionary" element={<Dictionary />} />
        <Route path="Weather" element={<Weather />} />
        <Route path="calculator" element={<Caluculator />} />
        <Route path="Checklist" element={<CheckList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default SideNavBar;
