import React from 'react';
import airbnb from './airbnb.jpeg';
import hotspot from './hotspot.jpeg';
import google from './google.jpeg';
import microsoft from './microsoft.jpeg';
import walmart from './walmart.jpeg';
import fedex from './fedex.jpeg';

const Clients = () => {
    return (
        <div>
            <div className='w-250 h-0.5 bg-gray-100 lg:flex-row flex-col '></div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <img src={airbnb} alt='airbnb' width={95} height={28} className='m-6' />
                    <img src={hotspot} alt='hotspot' width={95} height={28} className='m-6' />
                    <img src={google} alt='google' width={95} height={28} className='m-6' />
                    <img src={microsoft} alt='microsoft' width={95} height={28} className='m-6' />
                    <img src={walmart} alt='walmart' width={95} height={28} className='m-6' />
                    <img src={fedex} alt='fedex' width={95} height={28} className='m-6' />
                    <img/>
                </div>
                <div className='w-250 h-0.5 bg-gray-100'></div>
        </div>
    );
}

export default Clients;
