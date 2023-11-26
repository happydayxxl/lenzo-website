import type {Metadata} from 'next'
import {Arvo} from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const arvo = Arvo({
    weight: ["400", "700"],
    subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Lenzo GmbH',
    description: 'Lenzo GmbH',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">

        <body className={arvo.className}>
        <Providers>
            <Header/>
            <div className=''>
                {children}
            </div>
            <Footer/>
        </Providers>

        </body>

        </html>
    )
}
