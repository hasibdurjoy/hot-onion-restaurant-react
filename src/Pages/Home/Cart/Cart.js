import React from 'react';


const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;


    return (
        <div>
            <div className="row text-center">
                <div className="col-6 ">
                    <p className="text-start">Subtotal</p>
                    <p className="text-start">Tax</p>
                    <p className="text-start">shipping</p>
                    <h4 className="text-start">Total</h4>
                </div>
                <div className="col-6">
                    <p>${total.toFixed(2)}</p>
                    <p>${tax.toFixed(2)}</p>
                    <p>${shipping.toFixed(2)}</p>
                    <h4>${grandTotal.toFixed(2)}</h4>
                </div>
            </div>
        </div>
    );
};

export default Cart;