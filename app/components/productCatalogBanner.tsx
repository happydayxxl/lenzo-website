'use client'


import {Button} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function ProductCatalogBanner() {


    const router = useRouter();

    return (
        <div className='my-20'>


            <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full bg-[#C0C0C0]'>
                <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>


                    <div className="container my-24 mx-auto md:px-6">
                        <section className="mb-32">
                            <div
                                className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/images/mikrofaser.jpg')] h-[500px]"></div>
                            <div className="container mx-auto px-6 md:px-12 xl:px-32">
                                <div className="text-center">
                                    <div
                                        className="mt-[-170px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
                                        <div
                                            className="mb-16 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
                                            Blättern Sie durch unseren umfangreichen Produktkatalog <br/>
                                        </div>


                                        <Button
                                            className='text-xl px-12 py-6 mt-3 text-center rounded-md bg-primary text-white'
                                            onClick={() => router.push('/downloads')}>
                                            Produktkatalog
                                        </Button>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>


        </div>)


}