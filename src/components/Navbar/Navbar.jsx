import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5'>
            <div className="flex-1/3 "></div>
            <div className="space-x-5 text-accent flex-1/3 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-2 ">
                <img src={user} alt="" />
                <button className="btn btn-primary px-10 !font-semibold text-lg rounded-none ">Login</button>
            </div>
        </div>
    );
};

export default Navbar;