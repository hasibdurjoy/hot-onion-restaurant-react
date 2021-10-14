import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Breakfast = ({ breakfast }) => {
    const { name, description, img, price } = breakfast;
    return (
        <Col className=" py-3">
            <Card className="h-100 shadow">
                <Card.Img variant="top" src={img} className="img-fluid w-50 mx-auto py-3" />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
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

export default Breakfast;