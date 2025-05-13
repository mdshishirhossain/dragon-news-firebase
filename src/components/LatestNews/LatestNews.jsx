import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = ({filteredNews}) => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-4'>
            <p className='bg-secondary text-base-100 px-3 py-2'>Latest</p>
            <Marquee className='' pauseOnHover={true} speed={70}>
                {
                    filteredNews.map(news => <p key={news.id} className='font-semibold mr-10'>| {news.title} |</p>)
                }
                
            </Marquee>

        </div>
    );
};

export default LatestNews;