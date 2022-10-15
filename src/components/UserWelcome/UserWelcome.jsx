import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import Swal from 'sweetalert2';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const UserWelcome = ({ user, setUser }) => {

    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});

                Swal.fire({
                    title: 'Do you want Log Out?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Log out',
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire('Log out!', '', 'successfully')
                    }
                })
            })
            .catch((error) => {
                console.error(error)
            });
    }

    return (
        <section >
            <div className="flex items-center justify-center flex-wrap flex-col">
                <h2 className='text-2xl font-semibold bg-amber-300 px-4 py-4'>
                    {user?.displayName}
                </h2>
                <p className='text-lg'>
                    Your sign up email is <span className='text-green-400'>{user.email}</span>
                </p>

                <button
                    onClick={handleLogOut}
                    className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300 mt-3"
                >
                    Sign Out
                </button>

            </div>
        </section>
    );
};

export default UserWelcome;