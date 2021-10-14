import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../Hooks/setServices';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useServices();
    console.log(services);
    return (
        <div className="container">
            <h2>Services</h2>
            <Row xs={1} md={3} className="g-5">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;