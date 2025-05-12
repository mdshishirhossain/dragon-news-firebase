import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from './homelayout/LeftAside';
import RightAside from './homelayout/RightAside';

const Root = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="latest-news w-10/12 mx-auto ">
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 gap-6 my-12 relative'>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 sticky top-3 h-screen overflow-y-auto pr-5'>
                   <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;