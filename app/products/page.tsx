import React from "react";
import ProductCatalogBanner from "@/app/components/productCatalogBanner";
import Products from "@/app/components/products";

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lenzo GmbH - Produkte',
    description: 'Hygieneprodukte und Reinigungsprodukte',
}

export default function ProductsHome() {
    return (

        <>
            <Products/>
            <ProductCatalogBanner/>
        </>


    )
}