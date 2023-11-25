import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import Link from "next/link";

export default function Header () {
    return (
        <Navbar>
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

        </Navbar>
    )
}