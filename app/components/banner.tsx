'use client'

import Image from 'next/image'
import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function Banner() {


    const router = useRouter();

    return (
        <div className='my-20'>


            <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full bg-[#C0C0C0]'>
                <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>


                    <div className="container my-12 mx-auto md:px-6">

                        <section className="mb-32 text-center lg:text-left">
                            <div className="px-6 py-12 md:px-12">
                                <div className="grid items-center lg:grid-cols-2 lg:gap-x-12">
                                    <div className="mb-12 lg:mb-0">
                                        <div className="my-12 mb-16 text-3xl md:text-4xl xl:text-5xl font-bold leading-loose text-black">
                                            Für jeden Fleck die richtige Lösung - Len<span
                                            className='text-primary'>z</span>o macht&apos;s möglich <br/>
                                        </div>


                                        <Button
                                            className='text-xl px-12 py-6 mt-3 text-center rounded-md bg-primary text-white'
                                            onClick={() => router.push('/products')}>
                                            Produkte
                                        </Button>

                                    </div>

                                    <div className="mb-12 lg:mb-0 ">
                                        <Image src="/images/banner_picture.jpg" width={1280} height={960}
                                             className="w-full  rounded-lg shadow-lg dark:shadow-black/20" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>
            </div>


        </div>)


}