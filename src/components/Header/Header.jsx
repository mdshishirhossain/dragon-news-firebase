import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';
import { Link } from 'react-router';
const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-3  pt-8 pb-6'>
            <Link to="/">
            <img className='w-[400px]' src={logo} alt="" />
            </Link>
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;