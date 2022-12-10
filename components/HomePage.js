import React from 'react';
import heroImage from '../public/assets/Hero.jpg';
import { MdExpandMore } from 'react-icons/md';
import Image from "next/image";
import Link from 'next/link';

const HomePage = () => {
    return (
        <div id="home" className="h-screen w-full text-center">
            <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
                <div className="w-64 h-64 mx-auto overflow-hidden rounded-xl">
                    <Image src={heroImage} alt="me" />
                </div>

                <h1 className="capitalize font-bold text-gray-700 text-7xl">full stack developer</h1>
                <h6 className="capitalize font-bold text-gray-700 text-2xl">MERN STACK 🚀</h6>
                <p className='text-gray-600 text-xl max-w-sm mx-auto'>An Enthusiastic, Energetic and highly motivated individual.Looking forward to give my contribution to the betterment of the Society.</p>

                <Link href='/#me'>
                    <div className='group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer'>
                        know more
                        <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                            <MdExpandMore size={25} />
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomePage;