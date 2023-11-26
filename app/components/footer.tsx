import {Divider} from "@nextui-org/divider";

export default function Footer() {

    return (<div className='flex z-40 h-auto items-center justify-center '>
        <div className='flex px-6 gap-4 w-full flex-col relative flex-nowrap items-start justify-center '>
            <Divider className="my-4"/>
            <div className='flex flex-row text-3xl'>
                Lenzo GmbH
            </div>
            <div className='flex flex-row justify-center text-2xl'>
                Handel & Consulting
            </div>
            <div className='flex flex-col gap-0 justify-start'>
                <div className='flex flex-row  items-center'>
                    Gewerbepark 6
                </div>
                <div className='flex flex-row justify-center items-center'>
                    8111 Gratwein Straßengel
                </div>
                <div className='flex flex-row  items-center'>
                    Österreich
                </div>
            </div>
            <Divider className="my-4"/>

        </div>


    </div>)


}