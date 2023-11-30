import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import AboutUs from "@/app/components/aboutUs";
import Services from "@/app/components/services";
import Banner from "@/app/components/banner";

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
