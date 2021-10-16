import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <div className="col-lg-6 col-md-6 col-12">
                <h3 className="text-center">Give Your Delivery Info here</h3><hr />
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                    <div className="d-flex flex-column w-75 mx-auto gap-4 mt-3">
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
        </div>
    );
};

export default Shipping;