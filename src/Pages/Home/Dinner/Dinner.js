import React from 'react';
import { Row } from 'react-bootstrap';
import useDinners from '../../../Hooks/setDinners';
import Food from '../Food/Food';

const Dinner = () => {
    const { dinners } = useDinners();
    return (
        <div className="container" id="dinners">
            <Row xs={1} md={3} className="g-5">
                {
                    dinners.map(dinner => <Food key={dinner.id} food={dinner}></Food>)
                }
            </Row>
        </div>
    );
};

export default Dinner;