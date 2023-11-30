import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import AboutUs from "@/app/components/aboutUs";
import Services from "@/app/components/services";
import Banner from "@/app/components/banner";


import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lenzo GmbH - Handel und Consulting',
    description: 'Handel und Beratung von Hygieneprodukten, Reinigungsprodukten und Restaurierungsmaterialien.',
}

export default function Home() {



    return (
        <div>
            <BackgroundVideo/>
            <Services/>
            <Banner/>
            <AboutUs/>
        </div>
    )
}
