import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';


const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            title: 'home',
        },
        {
            id: 2,
            title: 'about',
        },
        {
            id: 3,
            title: 'portfolio',
        },
        {
            id: 4,
            title: 'experience',
        },
        {
            id: 5,
            title: 'contact',
        }
    ]

    return (
        <div className='flex justify-between px-4 item-center bg-black text-white w-full h-20'>
            <div className='text-3xl font-bold ml-2'>
                MISHU
            </div>
            {/* <ul className='hidden md:flex'>
            {links.map((data) => (
                    <li key={data.id} className='text-2xl py-4 capitalize cursor-pointer text-gray-500 hover:scale-105 duration-200'>
                        {data.title}
                    </li>
                ))}
            </ul> */}

            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
                {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
            </div>

            {nav && <ul className='flex items-center justify-center absolute flex-col top-0 left-0 w-full h-screen bg-black'>
                {links.map((data) => (
                    <li key={data.id} className='text-2xl py-4 capitalize cursor-pointer text-gray-500 hover:scale-105 duration-200'>
                        {data.title}
                    </li>
                ))}
            </ul>}


        </div>
    )
}

export default Navbar