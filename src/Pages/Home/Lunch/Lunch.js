import React from 'react';
import { Row } from 'react-bootstrap';
import useLunches from '../../../Hooks/setLunches';
import Food from '../Food/Food';


const Lunch = () => {
    const { lunches } = useLunches()
    return (
        <div className="container" id="lunch">
            <Row xs={1} md={3} className="g-5">
                {
                    lunches.map(lunch => <Food key={lunch.id} food={lunch}></Food>)
                }
            </Row>
        </div>
    );
};

export default Lunch;