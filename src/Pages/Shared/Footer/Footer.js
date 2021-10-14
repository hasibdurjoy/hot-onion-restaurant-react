import React from 'react';
import footerLogo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark text-light px-5 pt-3">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <img src={footerLogo} alt="" className="img-fluid w-50" />
                </div>
                <div className="col-sm-12 col-md-6 row">
                    <div className="col-6">
                        <p>About Online Food</p>
                        <p>Rate Our Blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="col-6">
                        <p>Get Help</p>
                        <p>React faqs</p>
                        <p>View all cities</p>
                        <p>restaurants near me</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-4">
                <p className="text-secondary">Copyrights @2020 online foods </p>
                <div className="d-flex gap-4">
                    <p>privacy policy</p>
                    <p>Terms of use</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;