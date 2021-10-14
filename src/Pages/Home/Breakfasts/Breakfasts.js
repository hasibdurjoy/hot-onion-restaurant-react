import { Row } from 'react-bootstrap';
import setBreakfast from '../../../Hooks/setBreakfast';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const { breakfasts } = setBreakfast();
    return (
        <div className="container">
            <Row xs={1} md={3} className="g-5">
                {
                    breakfasts.map(breakfast => <Breakfast key={breakfast.id} breakfast={breakfast}></Breakfast>)
                }
            </Row>
        </div>
    );
};

export default Breakfasts;