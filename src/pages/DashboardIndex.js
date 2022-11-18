import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const DashboardIndex = () => {
  return (
    <div>
      <Navbar className="Navbar">
        <Container className="Navbar">
          <Navbar.Brand>My dash Board</Navbar.Brand>
        </Container>
      </Navbar>
      <p>Welcome to index</p>
    </div>
  );
};

export default DashboardIndex;
