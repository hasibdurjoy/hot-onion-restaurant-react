import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Lunch = ({ lunch }) => {
    const { name, description, img, price } = lunch;
    return (
        <Col className="shadow-md py-3">
            <Card className="h-100">
                <Card.Img variant="top" src={img} className="img-fluid w-50 mx-auto" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 40)}
                    </Card.Text>
                    <Card.Title>
                        ${price}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Lunch; <h2>Here is your lunch</h2>