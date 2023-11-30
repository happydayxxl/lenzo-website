'use client'


import React from "react";
import Image from "next/image";

export default function Services() {


    return (<>


        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-3xl mt-12 mb-24'>Leistungen</div>
                <div
                    className='flex flex-col justify-center items-center gap-10 px-2 md:px-0 text-center'>
                    <div className='lg:text-3xl text-2xl'>Gerne sind wir Partner für Ihr Objekt!</div>

                    <div className='lg:text-3xl text-2xl'>Handel und Beratung von</div>
                    <div className='text-xl'>Hygiene & Reinigungsprodukten</div>
                    <Image height={225} width={300} src={'/images/reinigungswerkzeuge.jpg'} alt={'lenzo_services'}
                           className='w-80 rounded-lg shadow-lg dark:shadow-black/20'/>
                    <div className='text-xl'>für die professionelle Objekt Innen- und Außenreinigung</div>
                    <div className='text-2xl text-center'>Wir teilen unsere vielfältige Wissenskompetenz gerne mit
                        Ihnen!
                    </div>
                </div>
            </div>
        </div>


    </>)


}