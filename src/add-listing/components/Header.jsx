import { UserButton, useUser } from '@clerk/clerk-react';
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

function Header() {
    const { user, isSignedIn } = useUser();

    return (
        <>
            {/* Spacer div to prevent content from hiding behind fixed header */}
            <div className="h-[80px]"></div> 
            
            <div className='fixed top-0 left-0 right-0 z-50 bg-white flex justify-between items-center shadow-sm p-5 h-[80px]'>
                <img src='/logo.svg' alt='Logo' width={150} height={100} />

                <ul className='hidden md:flex gap-16 text-black'>
                    <li className='cursor-pointer hover:text-primary font-medium hover:scale-105 transition-all'>Home</li>
                    <li className='cursor-pointer hover:text-primary font-medium hover:scale-105 transition-all'>Search</li>
                    <li className='cursor-pointer hover:text-primary font-medium hover:scale-105 transition-all'>New</li>
                    <li className='cursor-pointer hover:text-primary font-medium hover:scale-105 transition-all'>Preowned</li>
                </ul>

                <div className='flex items-center gap-5'>
                    {isSignedIn ? <UserButton /> : null}
                    <Button>Submit Listing</Button>
                </div>
            </div>
        </>
    );
}

export default Header;







