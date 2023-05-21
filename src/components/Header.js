import React from "react";
import { Col, Row } from "react-bootstrap";
import { Roll } from "react-reveal";

const Header1 = () => {
  return (
    <Row>
     <Roll>
      <Col sm="12" className=" justify-content-center text-center " >
        <div className=" title">قائمة الطعام</div>
        <div className="d-flex justify-content-center">
          <p className="underline "></p>
        </div>
      </Col>
     </Roll>
    </Row>
  );
};

export default Header1;
