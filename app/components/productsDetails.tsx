import Image from "next/image";

export default function ProductsDetails() {
    return (


        <div className="container my-24 mx-auto md:px-6">
            <section className="mb-32">
                <h2 className="mb-12 text-center text-2xl font-bold">
                    Len<span className='text-primary'>z</span>o Reinigungslösungen - Ihr Partner für ganzheitliche
                    Sauberkeit!
                </h2>

                <div className="grid gap-6 lg:grid-cols-1">
                    <div className="mb-6 lg:mb-0">
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div className="p-6">
                                <div className="flex flex-wrap items-center">
                                    <div className="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">

                                        <div className="mb-6 dark:brightness-150 text-5xl lg:mb-0">
                                            <Image height={851} width={1280} src={'/images/chemie.jpg'} alt={'chemie'}/>
                                        </div>

                                    </div>
                                    <div className="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                                        <div className="mb-4 font-bold text-xl">Chemie</div>
                                        Erleben Sie Spitzenqualität in Reinigungschemikalien mit Len<span
                                        className='text-primary'>z</span>o. Als Ihr
                                        zuverlässiger Partner für Reinigungslösungen vertreiben wir speziell entwickelte
                                        Produkte, die nicht nur höchste Reinigungswirkung garantieren, sondern auch
                                        Umweltstandards erfüllen. Verlassen Sie sich auf Len<span
                                        className='text-primary'>z</span>o, um die richtige Formel
                                        für Sauberkeit zu liefern.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0">
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div className="p-6">
                                <div className="flex flex-wrap items-center">
                                    <div className="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">

                                        <div className="mb-6 dark:brightness-150 text-5xl lg:mb-0">
                                            <Image height={851} width={1280} src={'/images/geräte.jpg'} alt={'chemie'}/>
                                        </div>
                                    </div>
                                    <div className="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                                        <div className="mb-4 font-bold text-xl">Geräte</div>
                                        Len<span className='text-primary'>z</span>o erleichtert Ihnen die Reinigung mit
                                        einer umfangreichen Auswahl an
                                        vertretenen Reinigungsgeräten. Entdecken Sie ergonomische Bürsten, vielseitige
                                        Dampfreiniger und mehr. Vertrauen Sie darauf, dass Len<span
                                        className='text-primary'>z</span>o Ihnen die neuesten und
                                        effizientesten Reinigungslösungen an die Hand gibt.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 lg:mb-0">
                        <div
                            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div className="p-6">
                                <div className="flex flex-wrap items-center">
                                    <div className="flex-basis w-full shrink-0 grow-0 px-3 lg:w-5/12">
                                        <div className="mb-6 dark:brightness-150 text-5xl lg:mb-0">
                                            <Image height={851} width={1280} src={'/images/staubsauger.jpg'}
                                                   alt={'chemie'}/>
                                        </div>
                                    </div>
                                    <div className="flex-basis w-full shrink-0 grow-0 px-3 lg:w-7/12">
                                        <div className="mb-4 font-bold text-xl">Maschinen</div>
                                        Revolutionieren Sie Ihren Reinigungsprozess mit Len<span
                                        className='text-primary'>z</span>o&apos;s Vertrieb von
                                        hochmodernen Reinigungsmaschinen. Von automatisierten Staubsaugern bis hin zu
                                        industriellen Bodenreinigern bieten unsere vertretenen Maschinen Spitzenleistung
                                        und Zuverlässigkeit. Len<span className='text-primary'>z</span>o - Ihr Partner
                                        für fortschrittliche
                                        Reinigungstechnologie.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )


}

