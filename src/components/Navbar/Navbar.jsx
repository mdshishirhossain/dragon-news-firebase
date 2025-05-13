import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const {user, logOut} = use(AuthContext)
    // console.log(user)

    const handleLogOut = () => {
        logOut().then(() => {
            toast.warn('User logged out successfully')
        }).catch((error) => {
            toast.error(error.message)
        });
    }
    return (
        <div className='flex items-center justify-between py-5'>
            <div className="flex-1/3 ">{user && user.email}</div>
            <div className="space-x-5 text-accent flex-1/3 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>

            </div>
            <div className="login-btn flex items-center gap-2 ">
                {
                    user && <div className='p-1 border rounded-full'>
                        <img className='  rounded-full w-12 h-12 object-cover' src={user?.photoURL} alt="" />
                    </div>
                }
                {
                    user ? <button onClick={handleLogOut} className="btn btn-primary px-10 !font-semibold text-lg rounded-none ">Logout</button> :
                        <Link to="/auth/login" className="btn btn-primary px-10 !font-semibold text-lg rounded-none ">Login</Link >
                }
            </div>
        </div>
    );
};

export default Navbar;