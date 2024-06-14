import React from 'react';
import gg from './gg.jpeg';
import logo2 from './appStore.jpg.png';

const Footer = () => {
    return (
        <div className='bg-black'>
                <div className='bg-black'>.</div>
                <div className='bg-black'>.</div>
                <div className='ml-12 flex item-center flex-col lg:flex-row sm:text-left flex-wrap'>
                    <div>
                        <div className='text-white'>
                            <span className='mx-2'></span>
                            Download Now
                            <span className='mx-10'>License</span>
                        </div>
                        <br />
                        <div className="flex items-center flex-wrap text-left">
                            <a href="#" className="pl-4 pr-4 text-white">About</a>
                            <a href="#" className="pl-4 pr-4 text-white">Features</a>
                            <a href="#" className="pl-4 pr-4 text-white">Pricing</a>
                            <a href="#" className="pl-4 pr-4 text-white">News</a>
                            <a href="#" className="pl-4 pr-4 text-white">Help</a>
                            <a href="#" className="pl-4 pr-4 text-white">Contact</a>
                        </div>
                        <br />
                        <div className='text-white'>
                            <p className='m-4'>© 2021 Landify UI Kit. All rights reserved</p>
                        </div>
                    </div>
                    <div className='text-white mr-20 ml-auto flex flex-col space-y-4 text-left flex-wrap'>
                        <p>Get the App</p>
                        <img src={gg} alt='Google Play Store' className="h-6 w-auto mr-20" />
                        <img src={logo2} alt='App Store' className="h-10 w-auto mr-20" />
                    </div>

                </div>
                <div className='bg-black'>.</div>
                <div className='bg-black'>.</div>

            </div>
    );
}

export default Footer;

// import React from 'react';
// import gg from './gg.jpeg';
// import logo2 from './appStore.jpg.png';

// const Footer = () => {
//     return (
//         <div className='bg-black p-4 md:p-8'>
//             <div className='bg-black mb-4'>.</div>
//             <div className='bg-black mb-4'>.</div>
//             <div className='ml-4 md:ml-12 flex flex-col lg:flex-row items-start lg:items-center'>
//                 <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:mr-20">
//                     <div className='text-white flex flex-col lg:flex-row lg:items-center'>
//                         <span className='mx-2'></span>
//                         <span className='text-lg lg:text-xl'>Download Now</span>
//                         <span className='mx-10 lg:ml-10'>License</span>
//                     </div>
//                     <div className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
//                         <a href="#" className="pl-4 pr-4 text-white">About</a>
//                         <a href="#" className="pl-4 pr-4 text-white">Features</a>
//                         <a href="#" className="pl-4 pr-4 text-white">Pricing</a>
//                         <a href="#" className="pl-4 pr-4 text-white">News</a>
//                     </div>
//                     <div className="flex flex-wrap items-center space-x-4 mt-4 lg:mt-0">
//                         <a href="#" className="pl-4 pr-4 text-white">Help</a>
//                         <a href="#" className="pl-4 pr-4 text-white">Contact</a>
//                     </div>
//                     <div className='text-white mt-4 lg:mt-0'>
//                         <p className='m-4'>© 2021 Landify UI Kit. All rights reserved</p>
//                     </div>
//                 </div>
//                 <div className='text-white mt-4 lg:mt-0 flex flex-col items-start space-y-4 lg:ml-auto'>
//                     <p>Get the App</p>
//                     <img src={gg} alt='Google Play Store' className="h-6 w-auto" />
//                     <img src={logo2} alt='App Store' className="h-10 w-auto" />
//                 </div>
//             </div>
//             <div className='bg-black mb-4'>.</div>
//             <div className='bg-black mb-4'>.</div>
//         </div>
//     );
// }

// export default Footer;
