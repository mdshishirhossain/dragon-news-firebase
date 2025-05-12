import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from '../../components/FindUs/FindUs';
import QZone from '../../components/QZone/QZone';
import AdSection from '../../components/AdSection/AdSection';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <AdSection></AdSection>
        </div>
    );
};

export default RightAside;