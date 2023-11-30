'use client'

import React from "react";
import {SafetyDataSheets} from "@/app/components/safetyDataSheets";
import {Card, CardBody} from "@nextui-org/card";
import {PiFilePdfLight} from "react-icons/pi";
import {useRouter} from "next/navigation";


export default function Downloads() {

    const router = useRouter()

    return (
        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-3xl my-6'>Downloads</div>
                <div className='w-full'>
                    <div className='text-xl md:text-4xl my-6'>Produktkatalog</div>
                    <Card
                          isPressable={true}
                          isHoverable={true}
                          className='w-80'
                    >
                        <CardBody onClick={() => router.push('/data/Lenzo_Produktkatalog.pdf', '_blank')}>
                            <div className='flex flex-row justify-start items-center'>
                                <div className='text-3xl pr-4'><PiFilePdfLight/></div>
                                <div>Produktkatalog</div>
                            </div>
                        </CardBody>


                    </Card>


                    <div className='text-xl md:text-4xl my-6'>Sicherheitsdatenblätter</div>
                    <SafetyDataSheets/>
                </div>
            </div>
        </div>
    )
}
