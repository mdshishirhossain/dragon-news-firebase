import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header>
                <nav className='w-10/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-10/12 mx-auto py-10'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;