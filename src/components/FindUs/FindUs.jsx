import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold text-lg mb-5'>Find Us On</h2>
            <div className="">
                <div className="join join-vertical w-full ">
                    <button className="btn join-item bg-base-100 justify-start !py-7 font-medium"><FaFacebook className='bg-base-200 p-2 rounded-full mr-1' size={32}></FaFacebook> Facebook</button>
                    <button className="btn join-item bg-base-100 justify-start !py-7 font-medium"><FaTwitter className='bg-base-200 p-2 rounded-full mr-1' size={32}></FaTwitter> Twitter</button>
                    <button className="btn join-item bg-base-100 justify-start !py-7 font-medium"><FaInstagram className='bg-base-200 p-2 rounded-full mr-1' size={32}></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;