import { Row } from 'react-bootstrap';
import setBreakfast from '../../../Hooks/setBreakfast';
import Food from '../Food/Food';

const Breakfast = () => {
    const { breakfasts } = setBreakfast();
    return (
        <div className="container" id="breakfast">
            <Row xs={1} md={3} className="g-5">
                {
                    breakfasts.map(breakfast => <Food key={breakfast.id} food={breakfast}></Food>)
                }
            </Row>
        </div>
    );
};

export default Breakfast;