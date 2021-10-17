import React from 'react';

const OrderPlaced = () => {
    return (
        <div>
            <div className="row gap-5">
                <div className="col-md-6 me-5 ms-5 ps-5">
                    <img src="https://www.trackyourtruck.com/profiles/sndev_install/themes/sndev/img/fleet-tracking-pic1b.jpg" alt="" />
                </div>
                <div className="col-md-3  card mx-5 border-0 shadow-lg h-100 py-5">
                    <img src="https://i.ibb.co/tHFpb6B/Group-1151.png" className="w-50 p-3" alt="" height="120px" />
                    <div className="card border-0 shadow p-2">
                        <h5><i className="fas fa-map-marker-alt"></i> Your Location</h5>
                        <p>107 Rd No 8</p>
                        <h5><i className="fas fa-map-marker-alt"></i> Shop Address</h5>
                        <p>Gulshan Plaza Restaurant GPR</p>
                    </div>
                    <div className="mt-3">
                        <h2>09:30 PM</h2>
                        <p>Estimated Delivery Time</p>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <img src="https://i.ibb.co/MV85X2r/Group-1152.png" alt="" height="50px" />
                        </div>
                        <div className="col-6">
                            <h5>Hamim</h5>
                            <p>Your delivery Man</p>
                        </div>
                    </div>
                    <button className="btn btn-danger rounded-pill">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default OrderPlaced;