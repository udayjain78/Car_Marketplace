import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/add-listing/components/ui/select";
import { CiSearch } from "react-icons/ci";



function Search() {
    return (
        <div className='p-2 md:p-5 bg-white text-black rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-[60%]'>
            <Select>
                <SelectTrigger className='w-[180px] outline-none md:border-none shadow-none text-lg text-black'>
                    <SelectValue placeholder="Cars" />
                </SelectTrigger>
                <SelectContent className="text-black bg-white">
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Old">Old</SelectItem>
                </SelectContent>
            </Select>

            <SelectSeparator orientation="vertical" className='hidden md:block' />

            <Select>
                <SelectTrigger className='w-[180px] outline-none md:border-none shadow-none text-lg text-black'>
                    <SelectValue placeholder="Companies" />
                </SelectTrigger>
                <SelectContent className="text-black bg-white">
                <SelectItem value="Toyota">Toyota</SelectItem>
<SelectItem value="Honda">Honda</SelectItem>
<SelectItem value="Ford">Ford</SelectItem>
<SelectItem value="Chevrolet">Chevrolet</SelectItem>
<SelectItem value="BMW">BMW</SelectItem>
<SelectItem value="Mercedes">Mercedes</SelectItem>
<SelectItem value="Audi">Audi</SelectItem>
<SelectItem value="Nissan">Nissan</SelectItem>
<SelectItem value="Volkswagen">Volkswagen</SelectItem>
<SelectItem value="Hyundai">Hyundai</SelectItem>

                </SelectContent>
            </Select>

            <SelectSeparator orientation="vertical" className='hidden md:block' />

            <Select>
                <SelectTrigger className='w-[180px] outline-none md:border-none shadow-none text-lg text-black'>
                    <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent className="text-black bg-white">
                <SelectItem value="5,00,000">5,00,000</SelectItem>
<SelectItem value="10,00,000">10,00,000</SelectItem>
<SelectItem value="15,00,000">15,00,000</SelectItem>
<SelectItem value="20,00,000">20,00,000</SelectItem>
<SelectItem value="30,00,000">30,00,000</SelectItem>
<SelectItem value="40,00,000">40,00,000</SelectItem>
<SelectItem value="50,00,000">50,00,000</SelectItem>
<SelectItem value="60,00,000">60,00,000</SelectItem>
<SelectItem value="70,00,000">70,00,000</SelectItem>
<SelectItem value="75,00,000">75,00,000</SelectItem>

                </SelectContent>
            </Select>

            <div className="flex justify-center items-center p-5">
                <CiSearch className="text-5xl text-white bg-black rounded-full p-3 hover:scale-105 cursor-pointer transition-all" />
            </div>
        </div>
    );
}

export default Search;
