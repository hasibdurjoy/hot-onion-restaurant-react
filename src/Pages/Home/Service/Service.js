import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, description, img, icon } = service;
    return (
        <Col className="shadow-md py-3">
            <Card className="h-100" style={{ border: 'none' }}>
                <Card.Img variant="top" src={img} className="img-fluid w-100 mx-auto " />
                <Card.Body>
                    <div className="d-flex">
                        <img src={icon} alt="" className="mx-3" /> <Card.Title>{name}</Card.Title>
                    </div>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text className="text-primary">
                        see more <i className="fas fa-arrow-right bg-success fs-4 p-2 text-dark rounded-circle"></i>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;