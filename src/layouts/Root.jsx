import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from './homelayout/LeftAside';
import RightAside from './homelayout/RightAside';
import Loading from '../pages/Loading/Loading';

const Root = () => {
    const { state } = useNavigation()
    const data = useLoaderData()

    const filteredNews = data.filter(news => news.others.is_today_pick === true)
    // console.log(state)
    return (
        <div>
            <header>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className="latest-news w-10/12 mx-auto ">
                    <LatestNews filteredNews={filteredNews}></LatestNews>
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
                    {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Root;