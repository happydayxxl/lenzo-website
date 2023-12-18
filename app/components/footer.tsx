import {Divider} from "@nextui-org/divider";
import {lenzoData} from "@/app/data/data";
import Link from "next/link";
import {HiMail, HiPhone} from "react-icons/hi";

export default function Footer() {

    return (<div className='flex flex-col z-40 h-auto items-center justify-center '>
        <div className="border dark:border-white light:border-black w-full my-4"/>





        <div className='flex flex-col max-w-[1024px] w-full'>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:px-6 px-3 gap-4 flex-col items-start my-8'>

                <div className='flex-col flex'>
                    <div className='flex flex-row text-3xl pb-2'>
                        Len<span className='text-primary'>z</span>o GmbH
                    </div>
                    <div className='flex flex-row text-2xl  pb-5'>
                        Handel & Consulting
                    </div>
                    <div className='flex flex-col gap-1 justify-start'>
                        <div className='flex flex-row '>
                            Gewerbepark 6
                        </div>
                        <div className='flex flex-row'>
                            8111 Gratwein Straßengel
                        </div>
                        <div className='flex flex-row  '>
                            Österreich
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='text-xl lg:pb-10 pb-3 pt-5 lg:pt-0'>Kontakt</div>
                    <div className='flex flex-col gap-3'>


                        <div className='flex flex-row justify-start items-center'>
                            <div><HiPhone className='mr-1'/></div>
                            <div><Link className='hover:text-primary'
                                       href={lenzoData.telHref}>{lenzoData.tel}</Link></div>
                        </div>
                        <div className='flex flex-row justify-start items-center'>
                            <HiMail className='mr-1'/>
                            <a href='mailto:office@lenzo.at' className='hover:text-primary'>{lenzoData.email}</a>
                        </div>
                        <div className='flex flex-col justify-start items-start mt-3'>
                            <div className='font-bold'>Öffnungszeiten</div>
                            <div>Montag - Donnerstag:</div>
                            <div>08:00 bis 16:00</div>
                            <div>Freitag:</div>
                            <div>08:00 bis 12:00</div>
                        </div>
                    </div>


                </div>


                <div className='flex flex-col justify-start'>
                    <div className='text-xl lg:pb-10 pb-3 pt-5 lg:pt-0'>Rechtliches</div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row  items-center'>
                            <Link className='hover:text-primary' href={'/imprint'}>Impressum</Link>
                        </div>
                        <div className='flex flex-row  items-center'>
                            <Link className='hover:text-primary' href={'/privacystatement'}>Datenschutzerklärung</Link>

                        </div>


                    </div>
                </div>


            </div>
            <div className=''>

                <div className='flex flex-row '>
                    <iframe width="100%" height="300em" title="openstreetmap"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=15.33907860517502%2C47.11807540355157%2C15.342619121074678%2C47.11968521944969&amp;layer=mapnik&amp;marker=47.11888031758886%2C15.340848863124847"></iframe>
                </div>
            </div>

        </div>
        <div className="border dark:border-white light:border-black w-full my-4"/>
        <div className='mb-10 px-3 text-center justify-center items-center'>
            Copyright © 2023 <Link className='hover:text-primary' href={'https://muc.team'}>muc.team IT Solutions GmbH</Link> - Alle Rechte vorbehalten
        </div>

    </div>)


}