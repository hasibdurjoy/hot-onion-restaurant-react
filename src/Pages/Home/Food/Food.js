import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    const { name, description, img, price, id } = food;
    return (
        <Col className="shadow-md py-3">
            <Card className="h-100 shadow">
                <Card.Img variant="top" src={img} className="img-fluid w-50 mx-auto py-3" />
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 35)}
                    </Card.Text>
                    <Card.Title className="text-center">
                        ${price}
                    </Card.Title>
                    <div className="text-center mt-3">
                        <Link to={`/details/${id}`}
                        ><button className="btn btn-danger rounded-pill">Buy Now</button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Food;