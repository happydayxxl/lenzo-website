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
import {useState} from "react";
import {CiMenuBurger} from "react-icons/ci";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}

        >
            <NavbarBrand>

                <p className="font-bold text-inherit">LENZO</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">

                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/products" aria-current="page">
                        Produkte
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Kontakt
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/downloads">
                        Downloads
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent className="sm:hidden" justify="end">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}/>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        href="#"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Produkte
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        className="w-full"
                        href="#"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Downloads
                    </Link>
                </NavbarMenuItem>

            </NavbarMenu>
        </Navbar>
    )
}