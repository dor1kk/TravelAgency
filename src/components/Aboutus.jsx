// src/AboutUs.js
import React from 'react';
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <Row>
        <Col span={24}>
          <h2>About Us</h2>
          <p>This is sample text insert your desired text here because this is the dummy text.</p>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            hoverable
          >
            <Meta title="EXCELLENT TRIP PLANNING" description="This is sample text insert your desired text here because this is the dummy text." />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
          >
            <Meta title="BEST TOUR PRICING" description="This is sample text insert your desired text here because this is the dummy text." />
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
          >
            <Meta title="WE LOVE OUR CLIENTS" description="This is sample text insert your desired text here because this is the dummy text." />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
