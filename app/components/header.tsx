'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/navbar";
import Link from "next/link";
import {useEffect, useState} from "react";
import {LenzoLogo} from "@/app/components/lenzoLogo";


import {usePathname, useRouter} from 'next/navigation'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false);
    const [activeContact, setActiveContact] = useState(false);
    const [activeDownload, setActiveDownload] = useState(false);

    const pathname = usePathname()

    const router = useRouter();

    useEffect(() => {

        setActiveContact(false);
        setActiveProduct(false);
        setActiveDownload(false);


        switch (pathname) {
            case '/downloads': {
                router.push('/downloads')
                setActiveDownload(true);

                break;
            }
            case '/contact': {
                setActiveContact(true);
                break;
            }
            case '/products': {
                setActiveProduct(true);
                router.push('/products')
                break;
            }
        }


    }, [pathname]);


    function setActiveSelectionAndNavigate(path: string) {

        setActiveContact(false);
        setActiveProduct(false);
        setActiveDownload(false);

        switch (path) {
            case '/downloads': {
                setIsMenuOpen(false);
                setActiveDownload(true);
                router.push(path)
                break;
            }
            case '/contact': {
                setIsMenuOpen(false);
                setActiveContact(true);
                router.push(path)
                break;
            }
            case '/products': {
                setIsMenuOpen(false);
                setActiveProduct(true);
                router.push(path)
                break;
            }
        }


    }


    return (
        <Navbar
            className='text-black'
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            isBordered={true}
            classNames={{
                item: [

                    "data-[active=true]:after:rounded-[2px]"
                ]

            }}
        >
            <NavbarBrand>


                <Link href={'/'}><LenzoLogo/></Link>


            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6 text-black" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeProduct}>
                    <Link href="/products" aria-current="page" className='hover:text-primary'>
                        Produkte
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeContact}>
                    <Link color="foreground" href="/contact" className='hover:text-primary'>
                        Kontakt
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={activeDownload}>
                    <Link color="foreground" href="/downloads" className='hover:text-primary'>
                        Downloads
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>
            <NavbarMenu
                className='gap-6 pt-7 text-black '>
                <NavbarMenuItem isActive={activeProduct} className='w-full cursor-pointer'
                                onClick={() => setActiveSelectionAndNavigate('/products')}>

                    Produkte

                </NavbarMenuItem>
                <NavbarMenuItem isActive={activeContact} className='w-full cursor-pointer'
                                onClick={() => setActiveSelectionAndNavigate('/contact')}>

                    Kontakt

                </NavbarMenuItem>
                <NavbarMenuItem isActive={activeDownload} className='w-full cursor-pointer'
                                onClick={() => setActiveSelectionAndNavigate('/downloads')}>

                    Downloads

                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    )
}