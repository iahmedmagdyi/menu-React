import React from "react";
import { Col, Row, Card, } from "react-bootstrap";
import {  Bounce} from "react-reveal" 
const CardItems1 = ({ DataItems }) => {
  return (
    <Row className="mt-3" >
      <Bounce >
        {
          DataItems.length >= 1 ? (DataItems.map((item) => {
            return (
              <Col key={item.id} sm="12" className="mb-3" >
                <Card className="d-flex flex-row" style={{ backgroundColor: "#f8f8f8" }}>
                  <Card.Img src={item.imgUrl} style={{ width: "253px", height: "180px", borderRadius: "5px" }} />
                  <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                      <div>{item.title} </div>
                      <div className="price-item"> {item.price} </div>
                    </Card.Title>
                    <Card.Text className="des-item mt-3">
                      {item.des}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })) : <h2> لايوجد اصناف</h2>
        }
      </Bounce>

    </Row>
  );
};

export default CardItems1;
