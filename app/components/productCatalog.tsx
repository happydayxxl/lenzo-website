'use client'

import {Card, CardBody} from "@nextui-org/card";
import {PiFilePdfLight} from "react-icons/pi";
import React from "react";
import {handleCardClick} from "@/app/functions/functions";


export default function ProductCatalog() {




    return (<>
            <div className='text-xl md:text-4xl my-6'>Produktkatalog</div>
            <Card
                isPressable={true}
                isHoverable={true}
                className='w-80'
            >
                <CardBody onClick={() => handleCardClick('/data/Lenzo_Produktkatalog.pdf')}>
                    <div className='flex flex-row justify-start items-center'>
                        <div className='text-3xl pr-4'><PiFilePdfLight/></div>
                        <div>Produktkatalog</div>
                    </div>
                </CardBody>


            </Card>
        </>
    )


}