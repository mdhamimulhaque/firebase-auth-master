import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const LogInForm = ({ user, setUser }) => {
    const [userEmail, setUserEmail] = useState('');

    // handle Log in submit
    const handleLogInSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const user = res.user;
                setUser(user)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Log In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

                form.reset();

            })
            .catch((error) => {
                console.error(error)
            });
    }

    // ---> get email
    const handleGetEmailValue = (e) => {
        const email = e.target.value;
        setUserEmail(email)
    }

    //---> reset password
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                Swal.fire({
                    title: 'Please Check your email and reset your password',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }).catch((error) => {
                console.log(error)
            });
    }


    return (
        <section className="form_box w-80 lg:w-1/4 mx-auto p-5 bg-white p-10">
            {
                user?.email
                    ? "Log Out"
                    :
                    <div>
                        <h2 className='text-3xl text-center  font-semibold text-orange-400'>Log In Your Account</h2>
                        <form onSubmit={handleLogInSubmit}>
                            <label className="block">
                                <span className="after:content-['*'] mt-3 after:ml-0.5 after:text-orange-400 block text-sm font-medium text-amber-500">
                                    Email
                                </span>
                                <input type="email"
                                    name="email"
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-orange-300 placeholder-orange-400 focus:outline-none focus:orange-400 focus:orange-400 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Input Your Email"
                                    onBlur={handleGetEmailValue}
                                />
                            </label>

                            <label className="block">
                                <span className="after:content-['*'] mt-5 after:ml-0.5 after:text-orange-400 block text-sm font-medium text-amber-500">
                                    Password
                                </span>
                                <input type="password"
                                    name="password"
                                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-orange-300 placeholder-orange-400 focus:outline-none focus:orange-400 focus:orange-400 block w-full rounded-md sm:text-sm focus:ring-1"
                                    placeholder="Password" />
                            </label>

                            <button
                                type="submit"
                                className="px-8 py-2 w-full mt-5 font-semibold rounded bg-orange-400 hover:bg-orange-300  text-white  duration-300"
                            >Log In
                            </button>
                        </form>
                        <p className='text-center mt-3 cursor-pointer'><small >Forget password??
                            <span
                                className='text-blue-400 underline'
                                onClick={handleResetPassword}
                            > reset Password
                            </span>
                        </small></p>

                        <p className='mt-3 text-center'><small>Now a member?? please <Link to='/sign-up' className='text-blue-400 underline'>sign up</Link> first</small></p>
                    </div>
            }
        </section>
    );
};

export default LogInForm;