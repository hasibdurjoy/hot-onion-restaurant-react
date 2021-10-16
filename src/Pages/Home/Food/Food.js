import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Food.css';
import { useHistory } from 'react-router';


const Food = ({ food }) => {
    const { name, description, img, price, id } = food;

    const history = useHistory();
    const handleClick = () => {
        history.push(`/details/${id}`);
    }
    return (
        <Col className="shadow-md py-3 ">
            <Card onClick={handleClick} className="h-100 shadow food-container">
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