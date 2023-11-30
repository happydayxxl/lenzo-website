import React from "react";
import ProductsDetails from "@/app/components/productsDetails";

export default function Products() {
    return (


        <div className='flex flex-col justify-center items-center px-4 lg:px-16 w-full '>
            <div className='flex flex-col max-w-[1024px] w-full items-center justify-center'>
                <div className='lg:text-5xl font-bold text-3xl mt-6'>Produkte</div>
                <div className='my-10'>


                    <div className='py-5'>
                    Tauchen Sie ein in unsere exklusive Auswahl an Putzartikeln, die entwickelt wurden, um Ihren
                    Haushalt strahlend sauber zu halten. Von innovativen Bürsten bis hin zu effektiven Reinigungsmitteln
                    - Len<span className='text-primary'>z</span>o hat alles, was Sie brauchen.
                    </div>



                    <ProductsDetails />

                </div>
            </div>


        </div>
    )
}