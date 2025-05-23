import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className=''>
            <h2 className='font-semibold text-lg mb-5'>Login With</h2>
            <div className='space-y-2'>
                <button className="btn btn-outline btn-secondary w-full"><FcGoogle size={24}/> Login with Google</button>
                <button className="btn btn-outline btn-primary w-full"><FaGithub size={24}/> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;