import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../Hooks/setServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();
    return (
        <div className="container">
            <div className="text-start">
                <h2>Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum id atque qui aliquid autem, debitis suscipit in eos tenetur, eius inventore. Dolorum doloremque molestiae, asperiores, tenetur illo aspernatur ipsum perferendis animi officiis architecto numquam labore iste accusamus ratione qui maiores aliquid quas, dicta totam! Laborum voluptatem harum architecto aut molestias.</p>
            </div>
            <h2 className="text-center">Services</h2>
            <Row xs={1} md={3} className="g-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;