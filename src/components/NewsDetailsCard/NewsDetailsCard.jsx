import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    return (
        <div className='border border-base-300 p-7 rounded-md space-y-5'>
            <img className='w-full h-[400px] object-cover rounded-md' src={news.image_url} alt="" />
            <h2 className="text-2xl font-bold text-gray-800">{news.title}</h2>
            <p className='text-accent'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className="btn btn-secondary">All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;