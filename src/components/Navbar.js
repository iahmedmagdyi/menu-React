import React, { useState } from "react";
import {Row,Navbar,Container,Nav,Form, Button , } from "react-bootstrap";

const Navbar1 = ({fiterBysearch}) => {
   const [searchValue, setSearchValue] = useState("");

  const onsearch = ()=> {
    fiterBysearch(searchValue);
    setSearchValue("")

  }

  return (
    <Row>
      <Navbar bg="dark" expand="lg" varient="dark" >
        <Container>
          <Navbar.Brand href="#">
            <div style={{ color: "#b45b35" }}>مطعم جديد</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=> setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button onClick={()=> onsearch()} variant="outline-success mx-2">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Navbar1;
