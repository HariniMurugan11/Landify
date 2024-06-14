import React from 'react';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';
import icon7 from './icon7.png';
const Integrations = () =>{
    return(
        <div>
            <div className='m-9 mt-40 flex items-center md:flex flex-wrap '>
                    <div className='mr-20'>
                        <p className='font-bold text-4xl'>Easy Integrations <br /> with 170+ tools</p><br />
                        <p className='text-lg'>Connect Landify with your <br /> daily and keep things on track.</p>
                    </div>
                    
                    <div className='mt-10 md:mt-0 ml-10 md:ml-auto lg:ml-right'>
                        <div className='flex items-center '>
                            <img src={icon1} alt='icon1' className='w-20 h-20 mr-7 md:w-12 h-12  mr-7' />
                            <img src={icon2} alt='icon2' className='w-20 h-20 mr-7 md:w-12 h-12  mr-7' />
                            <img src={icon3} alt='icon3' className='w-20 h-20 mr-7 md:w-12 h-12  mr-7' />
                            <img src={icon4} alt='icon4' className='w-20 h-20  md:w-12 h-12  mr-7' />
                        </div>
                        <div className='flex items-center mt-10'>
                            <img src={icon5} alt='icon5' className='w-20 h-20 mr-7 ml-11 md:w-12 h-12  mr-7' />
                            <img src={icon6} alt='icon6' className='w-20 h-20 mr-7 md:w-12 h-12  mr-7' />
                            <img src={icon7} alt='icon7' className='w-20 h-20 md:w-12 h-12  mr-7' />
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Integrations;