import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAllFoods from '../../../Hooks/setAllFood';
import useAuth from '../../../Hooks/useAuth';
import useCartData from '../../../Hooks/useCartData';
import { getStoredCart } from '../../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { allFood } = useAllFoods();
    console.log(allFood);
    const [cart, setCart] = useCartData(allFood);
    console.log(cart);

    const allFoods = getStoredCart();
    console.log(allFoods);

    const { user } = useAuth();


    const onSubmit = data => {
        console.log(data);
        document.getElementById('confirm-order').style.display = "block";
    };



    const confirmHistory = useHistory();
    const confirmOrder = () => {
        confirmHistory.push('/ordered')
    }
    return (
        <div className=" py-1">
            <div className="row gap-5 mx-5">
                <div className="col-md-8 card border-0 shadow py-4 ">
                    <h3 className="text-center">Give Your Delivery Info here</h3><hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="mx-5">
                        <div className="d-flex flex-column mx-auto gap-4 mt-3">
                            <input defaultValue={user.displayName} {...register("name", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="name *" />
                            {errors.name && <span className="text-danger text-start">** Name is required</span>}

                            <input defaultValue={user.email} {...register("email", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="email *" />
                            {errors.email && <span className="text-danger text-start">** email address is required</span>}

                            <input  {...register("address", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="address *" />
                            {errors.address && <span className="text-danger text-start">** address is required</span>}

                            <input  {...register("phone", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="phone *" />
                            {errors.phone && <span className="text-danger text-start">** phone is required</span>}

                            <label htmlFor="Payment method">Payment method *</label>
                            <select {...register("payment")} className="rounded border-light py-1 px-3 fs-5">
                                <option value="bkash">Bkash</option>
                                <option value="rocket">Rocket</option>
                                <option value="cash on delivery">cash on delivery</option>
                            </select>

                            <input type="submit" value="Save and continue" className="btn btn-danger w-100 mx-auto fs-4 mb-1" />
                        </div>
                    </form>
                </div>
                <div className="col-md-3 card border-0 shadow d-flex justify-content-center">
                    <h2 className="text-center">Your Cart</h2>
                    <Cart cart={cart}></Cart>
                    <button onClick={confirmOrder} className="btn btn-danger rounded-pill" id="confirm-order">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Shipping;