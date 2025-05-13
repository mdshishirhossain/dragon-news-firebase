import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch("/categories.json").then(res => res.json())
const Categories = () => {
    const categories = use(categoriesPromise)
    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>All Categories ({categories.length})</h2>

            <div className='grid grid-cols-1 gap-2'>
                {
                    categories.map(category => <NavLink
                        key={category.id}
                        className={({ isActive }) =>
                            isActive ? "btn bg-base-300 pl-12 py-6 text-lg  justify-start" : "btn btn-ghost pl-12 py-6 text-lg text-gray-400 justify-start font-medium"
                        }
                        to={`/category/${category.id}`}
                    >
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;