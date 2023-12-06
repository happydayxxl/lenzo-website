'use client'

import {Card, CardBody} from "@nextui-org/card";
import {PiFilePdfLight} from "react-icons/pi";
import React, {useEffect, useRef, useState} from "react";
import {handleCardClick} from "@/app/functions/functions";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import {Button} from "@nextui-org/react";
import HTMLFlipBook from 'react-pageflip';

import Image from 'next/image'
import {GrCatalog, GrCatalogOption, GrLinkNext, GrLinkPrevious} from "react-icons/gr";

export default function ProductCatalog() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [totalPages, setTotalPages] = useState(41);
    const [currentPage, setCurrentPage] = useState(1);
    const catalog = useRef();


    function onFlip(e: any) {
        let page = 0;
        if (e.data <= 2)
            page = 1
        else if (e.data > 14 && e.data < 35) {
            page = e.data - 2;
        } else if (e.data > 35) {
            page = e.data - 3;
        } else {
            page = e.data - 1;
        }
        setCurrentPage(page);
    }


    function handleChapterJump(chapter: string) {

        switch (chapter) {
            case 'chemie':
                catalog.current.pageFlip().flip(2);
                break;
            case 'maschinen':
                catalog.current.pageFlip().flip(36);
                break;
            case 'geräte':
                catalog.current.pageFlip().flip(16);
                break;
        }


    }

    return (<>
            <div className='text-xl md:text-4xl my-6'>Produktkatalog</div>

            <div className='flex gap-3 flex-col'>
            <Card
                isPressable={true}
                isHoverable={true}
                className='w-80'
            >
                <CardBody onClick={() => handleCardClick('/data/Lenzo_Produktkatalog.pdf')}>
                    <div className='flex flex-row justify-start items-center'>
                        <div className='text-primary text-3xl pr-4'><PiFilePdfLight/></div>
                        <div>Produktkatalog</div>
                    </div>
                </CardBody>
            </Card>


            <Card
                isPressable={true}
                isHoverable={true}
                className='w-80 h-auto'
            >
                <CardBody onClick={() => onOpen(true)}>
                    <div className='flex flex-row justify-start items-center'>
                        <div className='text-primary text-3xl pr-4'><GrCatalog /></div>
                        <div>Interaktiver Produktkatalog</div>
                    </div>
                </CardBody>
            </Card>

            </div>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                size={'full'}
                scrollBehavior={'normal'}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
                className=''
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col justify-center items-center gap-1 text-3xl">Lenzo
                                Produktkatalog</ModalHeader>
                            <ModalBody
                                className=''>
                                <div className=' hidden xl:flex flex-col gap-3'>
                                    <div className='flex flex-row justify-center items-center gap-2'>
                                        <Button className='text-xl py-1 text-center rounded-md bg-primary text-white' onClick={() => catalog.current.pageFlip().flipPrev()}><GrLinkPrevious /></Button>
                                        [ Seite <span>{currentPage}</span> von
                                        <span>{totalPages}</span>]

                                        <Button className='text-xl py-1 text-center rounded-md bg-primary text-white' onClick={() => catalog.current.pageFlip().flipNext()}><GrLinkNext /></Button>
                                    </div>


                                    <div className='overflow-hidden'>
                                        <HTMLFlipBook
                                            ref={catalog}
                                            onFlip={onFlip}
                                            size={'fixed'}
                                            maxShadowOpacity={0.5}
                                            width={550} height={650} autoSize={false} className={''}>

                                            {Array.from({length: 46}, (_, index: number) => {
                                                return (
                                                    <div key={index} className="">
                                                        <Image
                                                            src={`/images/produktkatalog/Lenzo_Produktkatalog_2023_Seite_${index + 1}.png`}
                                                            alt={`bild_${index + 1}`} width={736} height={1053}
                                                            className='w-full h-full'/>
                                                    </div>)
                                            })}

                                        </HTMLFlipBook>
                                    </div>
                                </div>
                                <div className='flex xl:hidden flex-col gap-3'>
                                    <div>Am Mobilgerät kann der interaktive Katalog nicht angezeigt werden!</div>

                                    <div>Bitte verwenden Sie einen Desktop Browser.</div>

                                </div>
                            </ModalBody>
                            <ModalFooter className='flex flex-row gap-3'>
                                <div className='hidden xl:flex gap-3'>
                                    <div className='flex flex-col'><Button
                                        onClick={() => handleChapterJump('chemie')} className=' py-3 text-center rounded-md bg-primary text-white'>Chemie</Button>
                                    </div>
                                    <div className='flex flex-col'><Button
                                        onClick={() => handleChapterJump('geräte')} className='py-3 text-center rounded-md bg-primary text-white'>Geräte</Button>
                                    </div>
                                    <div className='flex flex-col'><Button
                                        onClick={() => handleChapterJump('maschinen')} className='py-3 text-center rounded-md bg-primary text-white'>Maschinen</Button>
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Schließen
                                    </Button>
                                </div>
                            </ModalFooter>
                        </>
                    )
                    }
                </ModalContent>
            </Modal>
        </>
    )


}