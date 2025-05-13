import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const categoriesPromise = fetch("/categories.json").then(res => res.json())

const CategoryNews = () => {
    const categories = use(categoriesPromise)
    const { id } = useParams()
    const data = useLoaderData()
    // console.log(data)

    const [category, setCategory] = useState([])

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data)
            return
        } else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick === true)
            setCategoryNews(filteredNews)
        } else {
            const filteredNews = data.filter(news => news.category_id == id)
            setCategoryNews(filteredNews)
        }

    }, [data, id])

    useEffect(() => {
        const newsCategory = categories.find(cat => cat.id == id)
        setCategory(newsCategory)
    }, [categories, id])

    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>{category.name}</h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.length === 0 && <p className=''>No News Found</p>
                }
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;