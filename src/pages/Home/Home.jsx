import React from 'react';
import { Navigate, useLoaderData } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';


const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>Dragon News Home</h2>

            {/* <Navigate to="/category/1"></Navigate> */}

            <div className='grid grid-cols-1 gap-5'>
                {
                    data.length === 0 && <p className=''>No News Found</p>
                }
                {
                    data.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Home;