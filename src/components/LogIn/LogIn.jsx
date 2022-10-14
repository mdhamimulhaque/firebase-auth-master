import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <section className='login_form_container bg-amber-100 h-screen flex items-center justify-center'>

            <div className="form_box w-80 lg:w-1/4 mx-auto p-5 bg-white p-10">
                <h2 className='text-3xl text-center  font-semibold'>Log In Form</h2>
                <form>
                    <label class="block">
                        <span class="after:content-['*'] mt-3 after:ml-0.5 after:text-amber-500 block text-sm font-medium text-amber-700">
                            Email
                        </span>
                        <input type="email"
                            name="email"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-amber-300 placeholder-slate-400 focus:outline-none focus:amber-500 focus:amber-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Input Your Email" />
                    </label>

                    <label class="block">
                        <span class="after:content-['*'] mt-5 after:ml-0.5 after:text-amber-500 block text-sm font-medium text-amber-700">
                            Password
                        </span>
                        <input type="password"
                            name="password"
                            class="mt-1 px-3 py-2 bg-white border shadow-sm border-amber-300 placeholder-slate-400 focus:outline-none focus:amber-500 focus:amber-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Password" />
                    </label>

                    <button
                        type="button"
                        className="px-8 py-2 w-full mt-5 font-semibold rounded bg-orange-500 hover:bg-orange-400  text-white  duration-300"
                    >Log In
                    </button>
                </form>
                <p className='mt-3 text-center'><small>Now a member?? please <Link to='/sign-up' className='text-blue-400 underline'>sign up</Link> first</small></p>
            </div>
        </section>
    );
};

export default LogIn;