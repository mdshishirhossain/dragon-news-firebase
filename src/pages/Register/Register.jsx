import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext)
    const navigate = useNavigate()

    const [nameError, setNameError] = useState("")

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log({ name, photo, email, password });


        if (name.length < 5) {
            setNameError("Name must be at least 5 character");
            return
        }
        else {
            setNameError("")
        }

        createUser(email, password)
            .then(result => {
                updateUser({
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    setUser(result.user)
                    navigate("/")
                    toast.success("User Created Successfully")
                }).catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                    // ..
                })

            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen ">
            <div className="card bg-base-100 w-full max-w-lg shrink-0  p-10">
                <div className="card-body">
                    <h2 className='text-center font-semibold text-2xl'>Register your account</h2>
                    <div className="divider mt-10"></div>
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label font-semibold text-base">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" required />

                        {
                            nameError && <p className="text-red-700 text-sm">{nameError}</p>
                        }

                        <label className="label font-semibold text-base">Photo URL</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" required />

                        <label className="label font-semibold text-base">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />

                        <label className="label font-semibold text-base">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-6 text-base'>Already Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;