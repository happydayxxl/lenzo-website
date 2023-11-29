import {SafetyDataSheets} from "@/app/components/safetyDataSheets";
import React from "react";

export default function Contact() {
    return (
        <div className='flex flex-col justify-center items-center px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-2xl my-6'>Kontakt</div>
                <div className=''>
                    Haben wir nun auch Ihr Interesse für unsere Produkte und/oder Dienstleistungen geweckt, schreiben
                    Sie uns einfach eine Nachricht damit wir uns mit Ihnen in Verbindung setzen können.

                    <div className='text-red-600'>
                        TODO: formular

                    </div>
                </div>
            </div>
        </div>
    )
}