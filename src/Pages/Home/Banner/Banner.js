import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="home-banner p-5">
            <h1 className="pt-5 pb-5 text-center">Best food waiting for your belly</h1>
            <div className="input-group mb-3 w-50 mx-auto pb-5">
                <input type="text" className="form-control rounded-pill" placeholder="search your favourite food" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-danger rounded-pill" type="button" id="button-addon2">Button</button>
            </div>
        </div>
    );
};

export default Banner;