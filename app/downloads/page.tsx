import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import {SafetyDataSheets} from "@/app/components/safetyDataSheets";

export default function Downloads() {
    return (
        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-2xl my-6'>Downloads</div>
                <div className=''>
                    <div className='text-xl md:text-4xl my-6'>Sicherheitsdatenblätter</div>
                    <SafetyDataSheets/>
                </div>
            </div>
        </div>
    )
}
