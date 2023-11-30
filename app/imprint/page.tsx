import React from "react";
import BackgroundVideo from "@/app/components/backgroundVideo";
import {lenzoData} from "@/app/data/data";
import Link from "next/link";


import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Lenzo GmbH - Impressum',
    description: 'Impressum',
}

export default function Imprint() {
    return (
        <div className='flex flex-col justify-center items-center px-4 lg:px-16'>
            <div className='flex flex-col max-w-[1024px] w-full'>
                <div className='lg:text-5xl font-bold text-2xl my-6 justify-center items-center flex'>Impressum</div>
                <div className='flex flex-col gap-3 py-5 '>
                    Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und
                    Offenlegungspflicht laut §25 Mediengesetz
                    <div>
                        Firma: Lenzo GmbH
                    </div>
                    <div>
                        Adresse: Gewerbepark 6, 8111 Gratwein Straßengel, Österreich
                    </div>
                    <div>
                        Firmenbuch-Nummer: FN 378428
                    </div>
                    <div>
                        Firmenbuchgericht: Landesgericht für ZRS Graz
                    </div>
                    <div>
                        Telefon: <Link className='hover:text-primary' href={lenzoData.telHref}>{lenzoData.tel}</Link>
                    </div>
                    <div>
                        E-Mail: <a className='hover:text-primary' href={lenzoData.emailHref}>{lenzoData.email}</a>
                    </div>
                    <div>
                        UID-Nummer: ATU 67135717
                    </div>
                    <div>
                        Aufsichtsbehörde/Gewerbebehörde: Magistrat Graz
                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>HAFTUNG</div>
                    <div>
                        Der Autor dieser Webseiten ist bestrebt, die hier angebotenen Informationen nach bestem Wissen
                        und Gewissen vollständig und richtig darzustellen und aktuell zu halten. Dennoch kann er
                        keinerlei Haftung für Schäden übernehmen, die sich aus der Nutzung der angebotenen Informationen
                        ergeben können – auch wenn diese auf die Nutzung von allenfalls unvollständigen bzw.
                        fehlerhaften Informationen zurückzuführen sind. Verweise auf fremde Webseiten liegen außerhalb
                        des Verantwortungsbereiches des Autors. Eine Haftung für die Inhalte von verlinkten Seiten ist
                        ausgeschlossen, zumal der Autor keinen Einfluss auf Inhalte wie Gestaltung von gelinkten Seiten
                        hat. Für Inhalte von Seiten, auf welche von Seiten dieser Homepage verwiesen wird, haftet somit
                        allein der Anbieter dieser fremden Webseiten – niemals jedoch derjenige, der durch einen Link
                        auf fremde Publikationen und Inhalte verweist. Sollten gelinkte Seiten (insbesondere durch
                        Veränderung der Inhalte nach dem Setzen des Links) illegale, fehlerhafte, unvollständige,
                        beleidigende oder sittenwidrige Informationen beinhalten und wird der Autor dieser Seite auf
                        derartige Inhalte von gelinkten Seiten aufmerksam (gemacht), so wird er einen Link auf derartige
                        Seiten unverzüglich unterbinden.

                    </div>


                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>URHEBERRECHT</div>
                    <div>
                        Der Inhalt der vom Autor selbst erstellten Inhalte dieser Seiten ist urheberrechtlich geschützt.
                        Jede den Bestimmungen des Urheberrechtsgesetzes widersprechende Verwendung jeglicher Inhalte
                        dieser Webseiten – insbesondere die weitergehende Nutzung wie beispielsweise die
                        Veröffentlichung, Vervielfältigung und jede Form von gewerblicher Nutzung sowie die Weitergabe
                        an Dritte – auch in Teilen oder in überarbeiteter Form – ohne ausdrückliche Zustimmung des
                        Autors ist untersagt. Davon ausgenommen sind ausdrücklich zum Download gekennzeichnete Dateien.

                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>INFORMATIONSGEHALT</div>
                    <div>
                        Die Informationen dieser Webseiten können ohne vorherige Ankündigung geändert, entfernt oder
                        ergänzt werden. Der Autor kann daher keine Garantie für die Korrektheit, Vollständigkeit oder
                        Qualität und letzte Aktualität der bereitgestellten Informationen geben.

                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>RECHTSWIRKSAMKEIT</div>
                    <div>
                        Durch Nutzung dieser Webseiten unterliegt der Nutzer den gegenständlichen Benützungsbedingungen.
                        Diese sind Teil des WWW-Angebotes. Sofern Teile oder einzelne Formulierungen der
                        Benützungsbedingungen der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig
                        entsprechen sollten, bleiben die übrigen Teile der Benützungsbedingungen in ihrem Inhalt und
                        ihrer Gültigkeit davon unberührt.

                    </div>
                </div>

                <div className='py-5 gap-3 flex flex-col'>
                    <div className='text-xl font-bold'>FOTOCREDITS</div>
                    <div>
                        Auf dieser Website befindet sich Bildmaterial von Pixabay (<Link
                        href={'https://pixabay.com/'} className='hover:text-primary'>https://pixabay.com/</Link>)

                    </div>
                </div>


            </div>
        </div>
    )
}
