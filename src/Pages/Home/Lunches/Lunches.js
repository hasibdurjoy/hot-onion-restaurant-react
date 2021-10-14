import React from 'react';
import { Row } from 'react-bootstrap';
import useLunches from '../../../Hooks/setLunches';
import Lunch from '../Lunch/Lunch';


const Lunches = () => {
    const { lunches } = useLunches()
    return (
        <div className="container">
            <Row xs={1} md={3} className="g-5">
                {
                    lunches.map(lunch => <Lunch key={lunch.id} lunch={lunch}></Lunch>)
                }
            </Row>
        </div>
    );
};

export default Lunches;