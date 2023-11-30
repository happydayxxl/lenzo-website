import React from "react";
import ContactForm from "@/app/components/contactForm";

import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Lenzo GmbH - Kontakt',
    description: 'Kommen wir in Kontakt',
}

export default function Contact() {
    return (
        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-3xl mt-6'>Kontakt</div>
                <div className=''>


                    <ContactForm/>


                </div>
            </div>
        </div>
    )
}