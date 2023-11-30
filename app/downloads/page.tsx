import React from "react";
import {SafetyDataSheets} from "@/app/components/safetyDataSheets";
import type {Metadata} from 'next'
import ProductCatalog from "@/app/components/productCatalog";

export const metadata: Metadata = {
    title: 'Lenzo GmbH - Downloads',
    description: 'Sicherheitsdatenblätter, Produktkatalog',
}


export default function Downloads() {


    return (
        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-3xl my-6'>Downloads</div>
                <div className='w-full my-16'>
                    <ProductCatalog/>


                    <div className='text-xl md:text-4xl my-6'>Sicherheitsdatenblätter</div>
                    <SafetyDataSheets/>
                </div>
            </div>
        </div>
    )
}
