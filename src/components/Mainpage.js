import React from 'react';
import phone from './phoneimg.jpeg'
import FeatureCard from './FeatureCard';
import { faCirclePlay, faCircleC } from '@fortawesome/free-solid-svg-icons';
//import {faCircleC} from '@fortawesome/free-solid-svg-icons';
//import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Clients from './Clients';
import Achievements from './Achievements'
import Integrations from './Integrations';
import Management from './Management';

const Mainpage = () => {
    return (
        <div>
            <div className='p-5'>
                <div className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-8 lg:p-16">
                    <div className="lg:ml-10 font-inter text-left mb-8 lg:mb-0 lg:max-w-lg">
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-10">
                            The easiest way to <br />manage projects
                        </h1>
                        <p className="text-subHeading text-base md:text-lg lg:text-xl mb-6 lg:mb-10">
                            From the small stuff to the big picture, organizes the work so teams know<br />
                            what to do, why it matters, and how to get it done.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center sm:justify-start">
                            <button className="mt-4 sm:mt-0 sm:mr-4 border border-gray-400 rounded-lg px-4 py-2 bg-getstarted text-white font-semibold">
                                Get Started
                            </button>
                            <button className="mt-4 sm:mt-0 border border-white rounded-lg px-4 py-2 font-semibold text-getstarted flex items-center">
                                <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#B197FC" }} size="lg" className='mr-2' />
                                Watch Video
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:mr-20 w-full lg:w-auto flex justify-center">
                        <img src={phone} alt='MobilePhone' className='w-1/3 md:w-2/4 lg:w-3/5' />
                    </div>
                </div>
                <br /><br />
                <div>
                    <Clients />
                </div>
                <div className='w-250 h-0.5 bg-gray-100'></div>
                <div className='m-20 text-center'>
                    <h1 className='font-bold text-4xl'>Tailor-made Features</h1>
                    <p className='text-subcontent m-4'>Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a <br />document or visual presentation.</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center '>
                        <FeatureCard
                            svg={
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_43_600)">
                                        <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#C4B5FD" />
                                        <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#7C3AED" />
                                        <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#1DB5BE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_43_600">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                            title="Robust workflow"
                            description="Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Sed erat nibh tristique ipsum."
                        />
                        <FeatureCard
                            svg={
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33334 1.33331H30.6667L26.6667 9.33331H1.33334L5.33334 1.33331Z" fill="#7C3AED" />
                                    <path d="M5.33334 12H30.6667L26.6667 20H1.33334L5.33334 12Z" fill="#1DB5BE" />
                                    <path d="M5.33334 22.6666H30.6667L26.6667 30.6666H1.33334L5.33334 22.6666Z" fill="#C4B5FD" />
                                </svg>
                            }
                            title="Flexibility"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                        />
                        <FeatureCard
                            svg={
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.6667 7.99998V2.66665C30.6667 2.31302 30.5262 1.97388 30.2762 1.72384C30.0261 1.47379 29.687 1.33331 29.3333 1.33331H2.66668C2.31305 1.33331 1.97392 1.47379 1.72387 1.72384C1.47382 1.97388 1.33334 2.31302 1.33334 2.66665V7.99998H30.6667Z" fill="#1DB5BE" />
                                    <path d="M1.33334 10.6666V29.3333C1.33334 29.6869 1.47382 30.0261 1.72387 30.2761C1.97392 30.5262 2.31305 30.6667 2.66668 30.6667H9.33334V10.6666H1.33334Z" fill="#C4B5FD" />
                                    <path d="M12 30.6666H29.3333C29.687 30.6666 30.0261 30.5262 30.2761 30.2761C30.5262 30.0261 30.6667 29.6869 30.6667 29.3333V10.6666H12V30.6666Z" fill="#7C3AED" />
                                </svg>
                            }
                            title="User Friendly"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                        />
                    
                        <FeatureCard
                            svg={
                                <svg className='m-4' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28 32H16C15.6464 32 15.3072 31.8595 15.0572 31.6095C14.8071 31.3594 14.6667 31.0203 14.6667 30.6667V28C14.6667 27.6464 14.8071 27.3072 15.0572 27.0572C15.3072 26.8071 15.6464 26.6667 16 26.6667H28C28.3536 26.6667 28.6928 26.8071 28.9428 27.0572C29.1928 27.3072 29.3333 27.6464 29.3333 28V30.6667C29.3333 31.0203 29.1928 31.3594 28.9428 31.6095C28.6928 31.8595 28.3536 32 28 32Z" fill="#C4B5FD" />
                                    <path d="M28 0H3.99999C3.64637 0 3.30723 0.140475 3.05718 0.390523C2.80713 0.640572 2.66666 0.979711 2.66666 1.33333V4C2.66666 4.35362 2.80713 4.69276 3.05718 4.94281C3.30723 5.19286 3.64637 5.33333 3.99999 5.33333H28C28.3536 5.33333 28.6928 5.19286 28.9428 4.94281C29.1929 4.69276 29.3333 4.35362 29.3333 4V1.33333C29.3333 0.979711 29.1929 0.640572 28.9428 0.390523C28.6928 0.140475 28.3536 0 28 0Z" fill="#1DB5BE" />
                                    <path d="M28 8H3.99999C3.64637 8 3.30723 8.14047 3.05718 8.39052C2.80713 8.64057 2.66666 8.97971 2.66666 9.33333V22.6667C2.66666 23.0203 2.80713 23.3594 3.05718 23.6095C3.30723 23.8595 3.64637 24 3.99999 24H28C28.3536 24 28.6928 23.8595 28.9428 23.6095C29.1929 23.3594 29.3333 23.0203 29.3333 22.6667V9.33333C29.3333 8.97971 29.1929 8.64057 28.9428 8.39052C28.6928 8.14047 28.3536 8 28 8Z" fill="#7C3AED" />
                                </svg>
                            }
                            title="Multiple Layouts"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                        />
                        <FeatureCard
                            svg={
                                <svg className='m-4' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66667 1.33334H2.66667C2.31305 1.33334 1.97391 1.47382 1.72386 1.72387C1.47381 1.97392 1.33334 2.31305 1.33334 2.66668V29.3333C1.33334 29.687 1.47381 30.0261 1.72386 30.2762C1.97391 30.5262 2.31305 30.6667 2.66667 30.6667H6.66667V1.33334Z" fill="#C4B5FD" />
                                    <path d="M9.33334 30.6667H22.6667V1.33334H9.33334V30.6667ZM16 25.3333C15.6464 25.3333 15.3072 25.1929 15.0572 24.9428C14.8071 24.6928 14.6667 24.3536 14.6667 24C14.6667 23.6464 14.8071 23.3072 15.0572 23.0572C15.3072 22.8071 15.6464 22.6667 16 22.6667C16.3536 22.6667 16.6928 22.8071 16.9428 23.0572C17.1929 23.3072 17.3333 23.6464 17.3333 24C17.3333 24.3536 17.1929 24.6928 16.9428 24.9428C16.6928 25.1929 16.3536 25.3333 16 25.3333ZM16 6.66668C16.3536 6.66668 16.6928 6.80715 16.9428 7.0572C17.1929 7.30725 17.3333 7.64639 17.3333 8.00001C17.3333 8.35363 17.1929 8.69277 16.9428 8.94282C16.6928 9.19287 16.3536 9.33334 16 9.33334C15.6464 9.33334 15.3072 9.19287 15.0572 8.94282C14.8071 8.69277 14.6667 8.35363 14.6667 8.00001C14.6667 7.64639 14.8071 7.30725 15.0572 7.0572C15.3072 6.80715 15.6464 6.66668 16 6.66668ZM16 14.6667C16.3536 14.6667 16.6928 14.8072 16.9428 15.0572C17.1929 15.3072 17.3333 15.6464 17.3333 16C17.3333 16.3536 17.1929 16.6928 16.9428 16.9428C16.6928 17.1929 16.3536 17.3333 16 17.3333C15.6464 17.3333 15.3072 17.1929 15.0572 16.9428C14.8071 16.6928 14.6667 16.3536 14.6667 16C14.6667 15.6464 14.8071 15.3072 15.0572 15.0572C15.3072 14.8072 15.6464 14.6667 16 14.6667Z" fill="#7C3AED" />
                                    <path d="M29.3333 1.33334H25.3333V30.6667H29.3333C29.687 30.6667 30.0261 30.5262 30.2761 30.2762C30.5262 30.0261 30.6667 29.687 30.6667 29.3333V2.66668C30.6667 2.31305 30.5262 1.97392 30.2761 1.72387C30.0261 1.47382 29.687 1.33334 29.3333 1.33334Z" fill="#1DB5BE" />
                                </svg>
                            }
                            title="Better Components"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                        />
                        <FeatureCard
                            svg={
                                <svg className='m-4' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_43_645)">
                                        <path d="M15.2078 0.175992L0.781159 6.91599C0.683598 6.96073 0.60095 7.03256 0.543053 7.12294C0.485156 7.21331 0.45445 7.31842 0.45459 7.42575C0.454731 7.53308 0.485711 7.63811 0.543844 7.72833C0.601977 7.81856 0.684814 7.89017 0.782492 7.93466L15.3225 14.6253C15.7518 14.8227 16.2478 14.8227 16.6772 14.6253L31.2172 7.93466C31.3149 7.8903 31.3978 7.81879 31.4561 7.72865C31.5143 7.6385 31.5454 7.53351 31.5457 7.42618C31.546 7.31885 31.5154 7.2137 31.4577 7.12325C31.3999 7.0328 31.3173 6.96086 31.2198 6.91599L16.7918 0.175992C16.5439 0.0601174 16.2735 6.10352e-05 15.9998 6.10352e-05C15.7261 6.10352e-05 15.4558 0.0601174 15.2078 0.175992Z" fill="#7C3AED" />
                                        <path opacity="0.64" d="M31.22 15.568L28.24 14.176C28.0266 14.0763 27.794 14.0243 27.5584 14.0236C27.3229 14.0229 27.09 14.0735 26.876 14.172L16.6773 18.8653C16.4649 18.963 16.2338 19.0136 16 19.0136C15.7662 19.0136 15.5351 18.963 15.3227 18.8653L5.12267 14.172C4.90885 14.0737 4.67621 14.0232 4.4409 14.0239C4.20559 14.0246 3.97324 14.0765 3.76001 14.176L0.780006 15.568C0.682503 15.6128 0.599949 15.6848 0.54217 15.7752C0.48439 15.8657 0.453823 15.9708 0.454103 16.0782C0.454384 16.1855 0.485502 16.2905 0.543754 16.3806C0.602006 16.4708 0.684937 16.5423 0.782674 16.5866L15.3227 23.276C15.535 23.3742 15.7661 23.4251 16 23.4251C16.2339 23.4251 16.465 23.3742 16.6773 23.276L31.2173 16.5866C31.3151 16.5423 31.398 16.4708 31.4563 16.3806C31.5145 16.2905 31.5456 16.1855 31.5459 16.0782C31.5462 15.9708 31.5156 15.8657 31.4578 15.7752C31.4001 15.6848 31.3175 15.6128 31.22 15.568Z" fill="#C4B5FD" />
                                        <path d="M31.22 24.144L28.24 22.752C28.0266 22.6523 27.794 22.6003 27.5585 22.5996C27.3229 22.5989 27.09 22.6495 26.876 22.748L16.6774 27.44C16.4649 27.5377 16.2338 27.5883 16 27.5883C15.7662 27.5883 15.5351 27.5377 15.3227 27.44L5.12269 22.7467C4.90887 22.6484 4.67623 22.5979 4.44091 22.5985C4.2056 22.5992 3.97326 22.6511 3.76002 22.7507L0.780019 24.144C0.682891 24.189 0.600708 24.261 0.543205 24.3513C0.485701 24.4416 0.455288 24.5465 0.455568 24.6535C0.455849 24.7606 0.486813 24.8653 0.544789 24.9553C0.602765 25.0453 0.685324 25.1168 0.782686 25.1613L15.3227 31.852C15.752 32.0493 16.248 32.0493 16.6774 31.852L31.2174 25.1613C31.3147 25.1168 31.3973 25.0453 31.4553 24.9553C31.5132 24.8653 31.5442 24.7606 31.5445 24.6535C31.5448 24.5465 31.5143 24.4416 31.4568 24.3513C31.3993 24.261 31.3172 24.189 31.22 24.144Z" fill="#1DB5BE" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_43_645">
                                            <rect width="32" height="32" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                            title="Well Organised"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
                        />
                    </div>
                </div>
                <div>
                    <Achievements />
                </div>
                <div>
                    <Integrations />
                </div>
            </div>
            <div>
                <Management />
            </div>
        </div>

    );
}

export default Mainpage;
