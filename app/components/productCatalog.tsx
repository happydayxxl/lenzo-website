'use client'

import {Card, CardBody} from "@nextui-org/card";
import {PiFilePdfLight} from "react-icons/pi";
import React from "react";
import {useRouter} from "next/navigation";


export default function ProductCatalog() {

    const router = useRouter()

    return (<>
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
        </>
    )


}