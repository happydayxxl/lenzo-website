'use client'


import {Card, CardBody} from "@nextui-org/card";
import {lenzoData} from "@/app/data/data";
import {PiFilePdfLight} from "react-icons/pi";
import {handleCardClick} from "@/app/functions/functions";

export function SafetyDataSheets() {


    return (
        <div className='grid xl:grid-cols-5 gap-4 grid-cols-1 lg:grid-cols-3'>



                {lenzoData.safetyDataSheets.map((sheet, key) => {
                    return (
                        <div className='' key={key}>
                            <Card
                                  fullWidth={true}

                                  isPressable={true}
                                  isHoverable={true}
                            >
                                <CardBody onClick={() => handleCardClick(sheet.link)}>
                                    <div className='xl:h-32 h-20 justify-between items-center lg:flex lg:flex-col lg:text-center '>
                                        <div className='text-primary text-3xl py-2 '><PiFilePdfLight/></div>
                                        <div className='text-sm mb-auto '>{sheet.name}</div>
                                    </div>
                                </CardBody>


                            </Card>
                        </div>
                    )

                })}



        </div>)


}