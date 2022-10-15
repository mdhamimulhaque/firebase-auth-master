import { getAuth, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import Swal from 'sweetalert2';
import app from '../../firebase/firebase.init';

const auth = getAuth(app)

const Github = () => {
    const gitHubProvider = new GithubAuthProvider()

    const handleGithubLogIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(res => {
                const user = res.user;
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Log In Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(user)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <section>
            <button
                type="submit"
                className="px-8 py-3 font-semibold rounded bg-white text-amber-400 hover:bg-amber-400 hover:text-white duration-300"
                onClick={handleGithubLogIn}
            >
                Github
            </button>
        </section>
    );
};

export default Github;