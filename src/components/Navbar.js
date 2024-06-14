// import React from 'react';
// import mainlogo from './mainlogo.jpeg';
// import logo1 from './gplaystore.png';
// import logo2 from './appStore.jpg.png';

// const Navbar = () => {
//     return (
//         <div className="p-8">
//             <div className="flex items-center">
//                 <div className="flex items-center space-x-4">
//                     <img src={mainlogo} alt='landify'className='w-5 h-5'/>
//                     <h1 className="font-bold text-black-400 text-lg">Landify</h1>
//                     <a href="#" className="pl-4 pr-4">Features</a>
//                     <a href="#" className="pl-4 pr-4">Pricing</a>
//                     <a href="#" className="pl-4 pr-4">Careers</a> 
//                     <a href="#" className="pl-4 pr-4">Help</a>
//                 </div>


//                 <div className="ml-auto flex space-x-4">
//                     <img src={logo1} alt='Google Play Store' className="h-10 w-auto" />
//                     <img src={logo2} alt='App Store' className="h-10 w-auto" />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';
import mainlogo from './mainlogo.jpeg';
import logo1 from './gplaystore.png';
import logo2 from './appStore.jpg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 md:p-8 bg-white shadow">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img src={mainlogo} alt='Landify' className='w-8 h-8 md:w-10 md:h-10' />
                    <h1 className="font-bold text-black-400 text-lg md:text-xl">Landify</h1>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 ml-4">
                        <a href="#" className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 hover:text-black">Features</a>
                        <a href="#" className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 hover:text-black">Pricing</a>
                        <a href="#" className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 hover:text-black">Careers</a>
                        <a href="#" className="px-2 py-1 lg:px-4 lg:py-2 text-gray-700 hover:text-black">Help</a>
                    </div>
                </div>

                {/* Right Side Icons (Visible on Desktop and Tablet) */}
                <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-auto">
                    <img src={logo1} alt='Google Play Store' className="h-8 w-auto md:h-10 lg:h-12" />
                    <img src={logo2} alt='App Store' className="h-8 w-auto md:h-10 lg:h-12" />
                </div>

                {/* Mobile Menu Icon (Visible on Tablet and Mobile) */}
                <div className="md:flex md:ml-4 lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden mt-4 space-y-2">
                    <a href="#" className="block text-gray-700 hover:text-black">Features</a>
                    <a href="#" className="block text-gray-700 hover:text-black">Pricing</a>
                    <a href="#" className="block text-gray-700 hover:text-black">Careers</a>
                    <a href="#" className="block text-gray-700 hover:text-black">Help</a>
                    {/* Render images only on mobile screens */}
                    <div className="flex space-x-4 mt-4 md:hidden">
                        <img src={logo1} alt='Google Play Store' className="h-10 w-auto" />
                        <img src={logo2} alt='App Store' className="h-10 w-auto" />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;





