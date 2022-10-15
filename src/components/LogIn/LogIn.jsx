import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Google from '../Google/Google';
import UserWelcome from '../UserWelcome/UserWelcome';



const LogIn = () => {
    const [user, setUser] = useState({});



    return (
        <>
            <section className='login_form_container bg-amber-100 h-screen flex items-center justify-center flex-col gap-5'>

                <div className="form_box w-80 lg:w-1/4 mx-auto p-5 bg-white p-10">
                    <h2 className='text-3xl text-center  font-semibold text-orange-400'>Log In Your Account</h2>
                    <form>
                        <label className="block">
                            <span className="after:content-['*'] mt-3 after:ml-0.5 after:text-orange-400 block text-sm font-medium text-amber-500">
                                Email
                            </span>
                            <input type="email"
                                name="email"
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-orange-300 placeholder-orange-400 focus:outline-none focus:orange-400 focus:orange-400 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Input Your Email" />
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
                            type="button"
                            className="px-8 py-2 w-full mt-5 font-semibold rounded bg-orange-400 hover:bg-orange-300  text-white  duration-300"
                        >Log In
                        </button>
                    </form>

                    <p className='mt-3 text-center'><small>Now a member?? please <Link to='/sign-up' className='text-blue-400 underline'>sign up</Link> first</small></p>
                </div>

                <div className="another_logIn_option flex gap-3 flex-col flex-wrap text-center">
                    <p className='text-center'>or use one of these options</p>
                    {!user.email ?
                        <Google user={user} setUser={setUser} />
                        : <UserWelcome user={user} setUser={setUser} />
                    }

                    <button type="button" className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300">Github</button>
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300">Twitter</button>
                    <button type="button" className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300">Facebook</button>
                </div>
            </section>


        </>
    );
};

export default LogIn;