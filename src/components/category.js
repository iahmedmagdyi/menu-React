import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Roll } from 'react-reveal'
const Categories1 = ({ filterCategory, allCateories }) => {
  const onfilter = (cat) => {
    filterCategory(cat)
  }

  return (
    <Row>
      <Roll>
        <Col className='d-flex justify-content-center mx-1'>
          {
            allCateories?.length >= 1 ? (allCateories.map((cat) => {
              return (
                <div>
                  <button className='btn1 mx-2' onClick={() => onfilter(cat)} style={{ border: "1px solid #b45b35" }}>{cat}</button>
                </div>
              )
            })) : <h3> لايوجد بيانات</h3>
          }

        </Col>
      </Roll>
    </Row>
  )
}

export default Categories1;