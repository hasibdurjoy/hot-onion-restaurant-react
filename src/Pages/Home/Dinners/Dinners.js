import React from 'react';
import { Row } from 'react-bootstrap';
import useDinners from '../../../Hooks/setDinners';
import Dinner from '../FoodMenu/Dinner/Dinner';

const Dinners = () => {
    const { dinners } = useDinners();
    return (
        <div className="container" id="dinners">
            <h2>Dinner</h2>
            <Row xs={1} md={3} className="g-5">
                {
                    dinners.map(dinner => <Dinner key={dinner.id} dinner={dinner}></Dinner>)
                }
            </Row>
        </div>
    );
};

export default Dinners;