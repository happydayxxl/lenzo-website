'use client'


import ContactForm from "@/app/components/contactForm";
import React from "react";
import Image from "next/image";

export default function Services() {


    return (<>


        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-2xl my-6'>Leistungen</div>
                <div
                    className='flex flex-col justify-start items-start md:justify-center md:items-center gap-10 px-2 md:px-0'>
                    <div className='text-2xl'>Gerne sind wir Partner für Ihr Objekt!</div>

                    <div className='text-2xl'>Handel und Beratung von</div>
                    <div>Hygiene & Reinigungsprodukten</div>
                    <Image height={225} width={300} src={'/images/services.jpg'} alt={'lenzo_services'}/>
                    <div>für die professionelle Objekt Innen- und Außenreinigung</div>
                    <div className='text-2xl'>Wir teilen unsere vielfältige Wissenskompetenz gerne mit Ihnen!</div>
                </div>
            </div>
        </div>


    </>)


}