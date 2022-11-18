import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DashboardIndex from "../pages/DashboardIndex";
import CurrencyConvert from "../pages/API/CurrencyConver";
import Dictionary from "../pages/API/Dictionary";
import Weather from "../pages/API/Weather";

const NavBar = () => {
  return (
    <BrowserRouter>
      <Navbar bg="light" className="Navar">
        <Container>
          <Navbar.Brand>My dash Board</Navbar.Brand>
        </Container>
      </Navbar>
      <Nav className="col-md-12 d-none d-md-block sidebar" activeKey="/">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          ></a>
        </CDBSidebarHeader>
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/currencyConverter">CurrencyConverter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Dictionary">Dictionary</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Weather">Weather</Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route index element={<DashboardIndex />} />
        <Route path="currencyConverter" element={<CurrencyConvert />} />
        <Route path="Dictionary" element={<Dictionary />} />
        <Route path="Weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};
export default NavBar;
