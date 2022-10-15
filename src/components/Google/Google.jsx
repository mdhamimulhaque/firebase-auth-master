import React from 'react';
import app from '../../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from 'sweetalert2';


const auth = getAuth(app)

const Google = () => {
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                console.log(user);

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log in Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <div>
            <button type="button"
                className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300"
                onClick={handleGoogleLogIn}
            >
                Google
            </button>
        </div>
    );
};

export default Google;