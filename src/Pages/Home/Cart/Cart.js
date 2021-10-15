import React from 'react';
import { useForm } from 'react-hook-form';


const Cart = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
                <h3 className="text-center">Give Your Delivery Info here</h3><hr />
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                    <div className="d-flex flex-column w-75 mx-auto gap-4 mt-3">
                        <input  {...register("name", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="name *" />
                        {errors.name && <span className="text-danger text-start">** Name is required</span>}

                        <input  {...register("email", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="email *" />
                        {errors.email && <span className="text-danger text-start">** email address is required</span>}

                        <input  {...register("password", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="password *" />
                        {errors.password && <span className="text-danger text-start">** password is required</span>}

                        <input  {...register("confirmPassword", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="confirm password *" />
                        {errors.confirmPassword && <span className="text-danger text-start">** confirm password is required</span>}

                        <input type="submit" value="Save and continue" className="btn btn-danger w-100 mx-auto fs-4 mb-1" />
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-md-4 col-12 container mt-3">
                <h4 className="text-start">From Gulshan Plaza Restaurant GPR</h4>
                <p className="text-start">Arriving in 20-30 min</p>
                <p className="text-start">107 Rd No 8</p>

                <div className="row text-center px-5 mt-5">
                    <div className="col-6 ">
                        <p className="text-start">Subtotal</p>
                        <p className="text-start">Tax</p>
                        <p className="text-start">Delivery charge</p>
                        <h4 className="text-start">Total</h4>
                    </div>
                    <div className="col-6">
                        <p>$1111</p>
                        <p>$11</p>
                        <p>$11</p>
                        <h4>$1133</h4>
                    </div>
                </div>
                <div className="text-center my-4">
                    <button className="btn btn-danger rounded-pill">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;