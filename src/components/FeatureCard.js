import React from 'react';

const FeatureCard = ({ svg, title, description }) => {
    return (
        
        <div className='justify-center items-center ' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='m-4'>{svg}</div>
            <h2 className='font-bold text-2xl'>{title}</h2><br />
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
