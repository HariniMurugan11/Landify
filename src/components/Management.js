import React from 'react'
import logo1 from './gplaystore.png';
import logo2 from './appStore.jpg.png';

const Management  = () =>{
    return(
        <div>
            <div className='bg-contentbg'>
                <div className='mr-16 ml-16 mt-30 flex items-center'>
                    <div className='mr-20'>
                        <div className='bg-contentbg'>.</div>
                        <div className='bg-contentbg'>.</div>
                        <p className='font-bold text-4xl'>Manage all projects from <br /> your mobile</p><br />
                        <p className='text-lg'>Download the app to manage your projects, keep track of the<br /> progress and complete tasks without procastinating. Stay on track <br />and complete on time!</p><br /><br />
                        <p>Get the App</p>
                        <div className='flex items-center'>
                            <img src={logo1} alt='Google Play Store' className="h-10 w-auto" />
                            <img src={logo2} alt='App Store' className="h-10 w-auto" />
                        </div>
                        <div className='bg-contentbg'>.</div>
                        <div className='bg-contentbg'>.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Management;