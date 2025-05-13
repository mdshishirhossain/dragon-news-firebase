import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../../components/FindUs/FindUs';
import QZone from '../../components/QZone/QZone';
import AdSection from '../../components/AdSection/AdSection';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';

const RightAside = () => {
    const user = use(AuthContext)
    return (
        <div className='space-y-8'>
            {user.user ? "" : <SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <QZone></QZone>
            <AdSection></AdSection>
        </div>
    );
};

export default RightAside;