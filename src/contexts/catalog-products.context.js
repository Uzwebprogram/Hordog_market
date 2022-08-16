import { useState } from "react";
import { createContext } from "react";

import Catalog from "./../data/shop-data.json"

export const ProductContext = createContext({
    catalog:[],

})

export const ProductsProvider = ({children})=>{
    const [products , setProducts] = useState(Catalog);
    const value = {products};
    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}