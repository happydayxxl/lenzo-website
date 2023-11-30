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

import {usePathname} from 'next/navigation'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState(false);
    const [activeContact, setActiveContact] = useState(false);
    const [activeDownload, setActiveDownload] = useState(false);

    const pathname = usePathname()

    useEffect(() => {

        setActiveContact(false);
        setActiveProduct(false);
        setActiveDownload(false);


        switch (pathname) {
            case '/downloads': {
                setActiveDownload(true);
                break;
            }
            case '/contact': {
                setActiveContact(true);
                break;
            }
            case '/products': {
                setActiveProduct(true);
                break;
            }
        }


    }, [pathname]);


    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            classNames={{
                item: [

                    "data-[active=true]:after:rounded-[2px]"
                ]

            }}
        >
            <NavbarBrand>


                <Link href={'/'}><LenzoLogo/></Link>


            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-6" justify="end">
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
                className='gap-6'>
                <NavbarMenuItem isActive={activeProduct} className='w-full'>
                    <Link
                        className="w-full"
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Produkte
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={activeContact} className='w-full'>
                    <Link
                        className="w-full"
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Kontakt
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem isActive={activeDownload} className='w-full'>
                    <Link
                        className="w-full"
                        href="/downloads"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Downloads
                    </Link>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    )
}