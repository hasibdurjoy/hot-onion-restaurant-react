import React from 'react';
import logInLogo from '../../../images/logo2.png';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/shop";

    const onSubmit = data => {
        console.log(data)
    };

    const { signInWithGoogle, signInWithGithub, signInWithFacebook } = useFirebase();

    const logInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const logInWithGithub = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_url);
            })
    }

    const logInWithFacebook = () => {
        signInWithFacebook()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className="register text-center">
            <img src={logInLogo} alt="" className="w-25" />
            <form onSubmit={handleSubmit(onSubmit)} className="w-75 mx-auto">
                <div className="d-flex flex-column w-50 mx-auto gap-5 mt-4">
                    <input  {...register("email", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="email *" />
                    {errors.email && <span className="text-danger text-start">** email address is required</span>}

                    <input type="password" {...register("password", { required: true })} className="rounded border-light py-1 px-3 fs-5" placeholder="password *" />
                    {errors.password && <span className="text-danger text-start">** password is required</span>}

                    <input type="submit" value="Login" className="btn btn-danger w-100 mx-auto fs-4 mb-1" />
                </div>
            </form>
            <p>Login using</p>
            <div >
                <button onClick={logInWithGoogle} className="btn btn-warning mx-5 fs-4 rounded-circle"><i className="fab fa-google"></i></button>
                <button onClick={logInWithGithub} className="btn btn-secondary mx-5 fs-4 rounded-circle"><i className="fab fa-github"></i></button>
                <button onClick={logInWithFacebook} className="btn btn-primary mx-5 fs-4 rounded-circle"><i className="fab fa-facebook"></i></button>
            </div>
            <div className="p-4">
                <Link to="/register" >Don't have an account?? signup now</Link>
            </div>
        </div>
    );
};

export default Login;