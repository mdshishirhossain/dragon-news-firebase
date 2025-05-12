import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playgroundImg from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-semibold text-lg mb-5'>Q-Zone</h2>

            <div className="space-y-5">
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playgroundImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;