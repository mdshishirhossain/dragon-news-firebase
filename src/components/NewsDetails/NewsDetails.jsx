import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData, useParams } from 'react-router';
import RightAside from '../../layouts/homelayout/RightAside';
import NewsDetailsCard from '../NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {

    const data = useLoaderData()
    const {id} = useParams()
    // const news = data.find(news => news.id === id)
    const [news, setNews] = useState({})

    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id === id);
        setNews(newsDetails)
    },[data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-12 gap-6 my-12 relative'>
                <section className="main col-span-9">
                    <h2 className='font-semibold text-xl mb-4'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3 sticky top-3 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;