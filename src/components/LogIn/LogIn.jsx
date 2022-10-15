import React, { useState } from 'react';
import Github from '../GitHub/Github';


import Google from '../Google/Google';
import LogInForm from '../LogInForm/LogInForm';




const LogIn = () => {
    const [user, setUser] = useState({});



    return (
        <>
            <section className='login_form_container bg-amber-100 h-screen flex items-center justify-center flex-col gap-5'>
                <LogInForm user={user} setUser={setUser} />

                <div className="another_logIn_option flex gap-3 flex-col flex-wrap text-center">
                    <p className='text-center'>or use one of these options</p>
                    <Google user={user} setUser={setUser} />

                    <Github user={user} setUser={setUser} />
                    <button type="submit" className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300">Twitter</button>
                    <button type="submit" className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300">Facebook</button>
                </div>
            </section>


        </>
    );
};

export default LogIn;