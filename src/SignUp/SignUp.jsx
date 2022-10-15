import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from "../firebase/firebase.init";
import Swal from 'sweetalert2';

const auth = getAuth(app);

const SignUp = () => {
    const [passwordError, setPasswordError] = useState('');


    const handleSignUpForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // ---> validation
        if (!/.{8,16}/.test(password)) {
            setPasswordError("Please should be 8-16 characters.")
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setPasswordError("Please should be a Small latter.");
            return;
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError("Please should be a Capital latter.");
            return;
        }
        if (!/(?=.*[0-9])/.test(password)) {
            setPasswordError("Please should be a  Digit.");
            return;
        }
        if (!/(?=.*\W)/.test(password)) {
            setPasswordError("Please should be a Spacial Character.");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = res.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Up Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

                handleEmailVerify();
                form.reset();
            })
            .catch((error) => {
                console.error(error)
            });
    }

    // ---> email verification
    const handleEmailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                Swal.fire({
                    title: 'Please Check your email and verify',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
    }





    return (
        <section className='signUp_form_container bg-amber-100 h-screen flex  items-center justify-center'>
            <div className="form_box w-80 lg:w-1/4 mx-auto p-5 bg-white p-10">
                <h2 className='text-3xl text-center  font-semibold text-amber-400'>Sign Up Your Account</h2>
                <form onSubmit={handleSignUpForm}>
                    <label className="block">
                        <span className="after:content-['*'] mt-3 after:ml-0.5 after:text-amber-400 block text-sm font-medium text-amber-400">
                            Name
                        </span>
                        <input type="text"
                            name="name"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-amber-300 placeholder-amber-400 focus:outline-none focus:amber-400 focus:amber-400 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Your Name" />
                    </label>

                    <label className="block">
                        <span className="after:content-['*'] mt-5 after:ml-0.5 after:text-amber-400 block text-sm font-medium text-amber-400">
                            Email
                        </span>
                        <input type="email"
                            name="email"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-amber-300 placeholder-amber-400 focus:outline-none focus:amber-400 focus:amber-400 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Input Your Email" />
                    </label>

                    <label className="block">
                        <span className="after:content-['*'] mt-5 after:ml-0.5 after:text-amber-400 block text-sm font-medium text-amber-400">
                            Password
                        </span>
                        <input type="password"
                            name="password"
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-amber-300 placeholder-amber-400 focus:outline-none focus:amber-400 focus:amber-400 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Password" />
                    </label>

                    <button
                        type="submit"
                        className="px-8 py-2 w-full mt-5 font-semibold rounded bg-amber-400 hover:bg-amber-300  text-white  duration-300"
                    >Sign Up
                    </button>
                </form>
                <p className='mt-3 text-center text-red-600'><small>{passwordError}</small></p>


                <p className='mt-3 text-center'><small>Already have an account?? please <Link to='/log-in' className='text-blue-400 underline'>Log in</Link></small></p>
            </div>
        </section>
    );
};

export default SignUp;