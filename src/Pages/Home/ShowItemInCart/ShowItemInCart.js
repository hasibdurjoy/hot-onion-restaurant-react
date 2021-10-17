import React from 'react';
import useAllFoods from '../../../Hooks/setAllFood';

const ShowItemInCart = ({ item }) => {
    return (
        <div className="card shadow border-0">
            <div className="row">
                <div className="col-4">
                    <img src={item.img} alt="" height="60px" className="p-1" />
                </div>
                <div className="col-8">
                    <p>{item.name}</p>
                    <button className="btn btn-danger rounded-circle"><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    );
};

export default ShowItemInCart;