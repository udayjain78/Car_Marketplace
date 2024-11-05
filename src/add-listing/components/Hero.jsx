import React from 'react'
import Search from './Search'
import { Separator } from "@/add-listing/components/ui/separator"
import { CiSearch } from "react-icons/ci";

function Hero() {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-2 h-[750px] w-screen bg-[#eef0fc]'>
            <h2 className='text-lg text-black mb-3'>Find cars for sale and for rent near you</h2>
            <h1 className='text-[60x] font-bold text-black mb-7'>Find Your Dream Car</h1>
            <Search />
            <Separator />
            <CiSearch />
            <img src='tesla2.png' alt='car' style={{ width: '700px', height: 'auto' }} className='object-contain background:transparent' ></img>
        </div>
        
    </div>
  )
}

export default Hero