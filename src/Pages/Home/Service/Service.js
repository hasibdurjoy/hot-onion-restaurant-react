import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Col className="shadow-md py-3 rounded">
            <Card className="h-100">
                <Card.Img variant="top" src={img} className="img-fluid w-100 mx-auto" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;