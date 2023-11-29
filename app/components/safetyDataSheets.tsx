'use client'


import {Card, CardBody} from "@nextui-org/card";
import {lenzoData} from "@/app/data/data";
import {PiFilePdfLight} from "react-icons/pi";
import {useEffect} from "react";

export function SafetyDataSheets() {


    function handleCardClick(link: string) {
            const newTab = window.open(link, '_blank');
            if (newTab) {
                newTab.focus();
            } else {
                console.error('Unable to open new tab. Please allow pop-ups for this site.');
            }
    }

    return (
        <div className='gap-3 flex flex-col'>
            {lenzoData.safetyDataSheets.map((sheet, key) => {
                return (
                    <Card key={key}
                          fullWidth={true}
                          isPressable={true}
                          isHoverable={true}
                    >
                        <CardBody onClick={() => handleCardClick(sheet.link)}>
                            <div className='flex flex-row justify-start items-center'>
                                <div className='text-3xl pr-4'><PiFilePdfLight/></div>
                                <div>{sheet.name}</div>
                            </div>
                        </CardBody>


                    </Card>
                )

            })}


        </div>)


}